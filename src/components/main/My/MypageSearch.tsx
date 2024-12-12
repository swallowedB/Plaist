import { useState } from "react"
import images from "../../../assets/images/importImages";

export default function MypageSearch() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색어:", query);
  };

  return (
    <div className={`
      m-[29px] w-[415px] h-[47px] 
      relative
      `}>
      {/*검색 바*/}
      <input 
        type="text"
        placeholder="어떤 것을 찾고 계신가요?"
        value={query}
        onChange={handleInputChange}
        className={`
          w-[415px] h-[47px] px-6 py-3
          font-pretendard 
        bg-custom-input/70 shadow-default
          rounded-[30px]
          `}/>

       <img 
        src={images.search_icon} 
        alt="검색 아이콘"
        className="absolute top-[13px] left-[373px]" />
      
    </div>
  )
}
