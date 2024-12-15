import { useState } from "react";
import SearchBar from "../utills/SearchBar";
import MypageCards from "./MypageCards/MypageCards";

type TestData = {
  id: number;
  title: string;
  likes: number;
  location: string;
};

const testData: TestData[] = [
    {id:1, title:"✨ 2025 새해 모임", likes:4, location: 'seoul'},
    {id:2, title:"✨ 2026 새해 모임", likes:5, location: 'seoul'},
    {id:3, title:"✨ 2027 새해 모임", likes:7, location: 'seoul'},
    {id:4, title:"✨ 2027 새해 모임", likes:7, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
    {id:5, title:"✨ 2027 새해 모임", likes:8, location: 'seoul'},
]

export default function MyLike() {
  const [filteredData, setFilteredData] = useState<TestData[]>(testData|| []);

  return (
    <div className={`flex flex-col items-center`}>
      <SearchBar
        data={testData}
        searchKey="title"
        onSearch={setFilteredData}
        placeholder="검색해보세요 (oﾟvﾟ)ノ"
      />
      {/* 필터링된 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {filteredData.length > 0 ? (
            <MypageCards data={filteredData} />
          ) : (
            <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
              검색 결과를 찾지 못했어요 ψ(｀∇´)ψ
            </div>
          )}
      </div>
    </div>
  );
}
