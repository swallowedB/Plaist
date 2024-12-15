import { useState } from "react";
import SearchBar from "../utills/SearchBar";

export default function MypageSearch() {
  const testData = [
    {id:1, title:"✨ 2025 새해 모임", likes:4, location: seoul}
  ]

  const [filteredData, setFilteredData] = useState(testData);

  return (
    <div className={`mt-[40px]`}>
      <SearchBar 
        data={testData}
        searchKey="title"
        onSearch={setFilteredData}
        placeholder="테스트1"
      />
      
    </div>
  )
};
