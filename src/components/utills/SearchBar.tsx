import { useState } from "react";
import images from "../../assets/images/importImages";

interface SearchBarProps<T> {
  data: T[]; 
  searchKey: keyof T;
  onSearch: (result: T[]) => void; // 필터링 결과 전달
  placeholder?: string;
}
export default function SearchBar<T>({data, searchKey, onSearch, placeholder, ...rest }: SearchBarProps<T>) {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      onSearch(data); // 검색어가 없으면 전체 데이터 반환
    } else {
      const filtered = data.filter((item) =>
        item[searchKey]?.toString().toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filtered); // 필터링된 데이터 반환
    }
  };

  return (
    <div className={`w-[415px] h-[47px] relative`}>

      {/*검색 아이콘 */}
      <img 
        src={images.search_icon} 
        alt="검색 아이콘"
        className="absolute top-[13px] left-[373px]" />

      {/*검색 입력 필드 */}  
      <input 
        type="text"
        value={searchQuery}
        placeholder={placeholder || "어떤 것을 찾고 계신가요?"}
        onChange={(e) => handleSearch(e.target.value)}
        {...rest}
        className={`
          w-[415px] h-[47px] px-6 py-3 font-pretendard bg-custom-input/70 shadow-default rounded-[30px] 
          outline-none focus:outline-none focus:bg-white transition-all placeholder:text-sm placeholder:text-custom-gray/70
          placeholder:font-medium
          `}/>
      
    </div>
  )
};
