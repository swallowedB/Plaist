import { useEffect, useState } from "react";
import SearchBar from "../utills/SearchBar";
import MypageCards from "./MypageCards/MypageCards";
import { useUserStore } from "../../stores/useInfoStore";
import { useMyCourseStore } from "../../stores/useMyCourseStore";

type CardData = {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationAddress: string;
  likes: number;
  image: string;
};

export default function MypageMyCourse() {
  const { myCourseList, fetchMyCourses } = useMyCourseStore();
  const [ filteredList, setFilteredList ] = useState<CardData[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const { userId, setUserId } = useUserStore();

  useEffect(() => {
    if(!userId){
      setUserId();
    }
    if(userId) {
      fetchMyCourses(userId);
    }
  }, [userId, setUserId, fetchMyCourses])

  
    const handleSearch = (result: CardData[]) => {
      setIsSearching(result.length > 0 || result.length === 0);
      setFilteredList(result);
    }

  return (
    <div className={`flex flex-col items-center`}>
      {/* 검색바 */}
      <SearchBar
        data={myCourseList}
        searchKey="courseTitle"
        onSearch={handleSearch}
        placeholder="무엇이든 검색해보세요 (oﾟvﾟ)ノ"
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
          myCourseList.length > 0 ? (
            <MypageCards data={myCourseList} />
          ) : (
            <div className="col-span-3 mt-10 font-medium text-center text-primary-700 font-pretendard text-sm">
              아직 등록된 코스가 없어요 இ௰இ
            </div>
          )
        )}
      </div>
    </div>
  )
}
