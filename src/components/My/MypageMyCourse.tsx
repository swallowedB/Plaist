import { useEffect, useState } from "react";
import SearchBar from "../utills/SearchBar";
import MypageCards from "./MypageCards/MypageCards";
import { useUserStore } from "../../stores/useInfoStore";
import { getMyCourseObj } from "../../api/postApi";

interface Course {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationName: string;
  likes: number;
  image: string;
}

export default function MypageMyCourse() {
  const [myCourseList, setMyCourseList] = useState<Course[]>([]);
  const [filteredList, setFilteredList] = useState<Course[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { userId, setUserId } = useUserStore();

  useEffect(() => {
    if(!userId){
      setUserId();
    }
    if(userId) {
      const fetchData = async () => {
        try {
          const data = await getMyCourseObj(userId);
          const parsedData = data.map((item: any) => {
            try {
              const parsedTitle = JSON.parse(item.title);
              return {
                id: item._id, 
                courseTitle: parsedTitle.courseTitle,
                courseDescription: parsedTitle.courseDescription,
                locationName: parsedTitle.locationObjs.locationName,
                likes: item.likes,
                image: item.image, 
              };
            } catch (error) {
              console.warn("JSON parsing error for title:", item.title);
            }
          });
          setMyCourseList(parsedData);
          setFilteredList(parsedData);
        } catch (error) {
          console.error("Error fetching or parsing data:", error);
        }
      };
      fetchData();
    }
  }, [userId, setUserId])

  const handleSearch = (result: Course[]) => {
    setIsSearching(result.length > 0 || result.length === 0);
    setFilteredList(result);
  }

  return (
    <div className={`flex flex-col items-center`}>
      <SearchBar
        data={myCourseList}
        searchKey="courseTitle"
        onSearch={handleSearch}
        placeholder="검색해보세요 (oﾟvﾟ)ノ"
      />
      {/* 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {isSearching ? (
          filteredList.length > 0 ? (
            <MypageCards data={filteredList} />
          ) : (
            <div className="col-span-3 mt-10 font-semiBold text-center text-primary-700 font-pretendard text-sm">
              검색 결과를 찾지 못했어요 ψ(´´∀´´)ψ
            </div>
          )
        ) : (
          <MypageCards data={myCourseList} />
        )}
      </div>
    </div>
  )
}
