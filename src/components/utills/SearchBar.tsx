import { useState } from "react";
import images from "../../assets/images/importImages";

interface SearchBarProps {
  data: {[key: string]: any}[]; // 검색 대상 데이터 배열(객체)
  searchKey: string;
  onSearch: (result: any[]) => void; // 필터링 결과 전달
  placeholder?: string;
}
export default function SearchBar({data, searchKey, onSearch, placeholder}: SearchBarProps) {

  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setUserInput(value);

    const filteredSearchData = data.filter((item) => {
      const targetValue = item[searchKey]?.toString().toLowerCase() || "";
      return targetValue.includes(value);
    });
    onSearch(filteredSearchData);
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
        value={userInput}
        placeholder={placeholder || "어떤 것을 찾고 계신가요?"}
        onChange={handleInputChange}
        className={`
          w-[415px] h-[47px] px-6 py-3 font-pretendard bg-custom-input/70 shadow-default rounded-[30px] 
           outline-none focus:outline-none focus:bg-white transition-all
          `}/>
      
    </div>
  )
};
