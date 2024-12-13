import { useState } from "react";
import SearchBar from "../utills/SearchBar";

export default function MypageSearch() {
  const testData = [
    {id:1, title:"✨ 2025 새해 모임", comment:"4~5명이 모여서 즐기기 딱 좋은 코스였습니다👍 좋은 정보 공유 감사합니다😇"}
  ]

  const [results, setResults] = useState<typeof testData>([]);

  return (
    <div className={`mt-[40px]`}>
      <SearchBar 
        data={testData}
        searchKey="title || comment"
        onSearch={setResults}
      />
      
    </div>
  )
};
