import { useEffect, useState } from "react";
import { getMyCourseObj } from "../../api/postApi";
import MyCourseCards from "./MyCourseCards";
import { getUserIdFromToken } from "../../api/userApi";
import SearchBar from "../utills/SearchBar";

export default function ViewMyAllCourse() {
  const [courseList, setCourseList] = useState([]);
  const [userId, setUserId] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredData, setFilteredData] = useState<Course[]>([]);

  useEffect(() => {
    const currentUserId = getUserIdFromToken();
    setUserId(currentUserId);
  }, []);
  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const res = await getMyCourseObj(userId);
        setCourseList(res);
      };
      fetchData();
    }
  }, [userId]); // userId가 변경될 때마다 실행

  const handleSearch = (result: Course[]) => {
    setIsSearching(result.length > 0 || result.length === 0);
    setFilteredData(result);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20 mb-12">
        <SearchBar 
          data={courseList}
          searchKey={["courseTitle","courseDescription","locationObjs","title"]}
          onSearch={handleSearch}
          placeholder="무엇이든 찾아보세요 (∩^o^)⊃━☆"  
        />
      </div>
      {/* 데이터 렌더링 */}
      {isSearching ? (
        filteredData.length > 0 ? (
          <MyCourseCards courseList={filteredData} />
        ) : (
          <div className="col-span-3 mt-10 text-sm text-center font-semiBold text-primary-700 font-pretendard">
          검색 결과를 찾지 못했어요 ψ(´´∀´´)ψ
          </div>
        )
      ) : courseList.length > 0 ? (
        <MyCourseCards courseList={courseList} />
      ): (
        <div className="col-span-3 mt-10 text-sm text-center font-semiBold text-primary-700 font-pretendard">
          나만의 코스를 생성하고 자랑해보세요 (o゜▽゜)o☆
        </div>
      )}
    </div>
  );
}
