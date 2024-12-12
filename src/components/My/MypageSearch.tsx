import { useState } from "react";
import images from "../../assets/images/importImages";

export default function MypageSearch() {
  const [query, setQuery] =useState("");
  const [placeholder, setPlaceholder] = useState("어떤 것을 찾고 계신가요?")

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = (e:React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === ""){
      setPlaceholder("어떤 것을 찾고 계신가요?");
    }
    setQuery("")
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={`
      m-[29px] w-[415px] h-[47px] 
      relative
      `}>
      {/*검색 바*/}
      <input 
        type="text"
        value={query}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`
          w-[415px] h-[47px] px-6 py-3
          font-pretendard 
        bg-custom-input/70 shadow-default
          rounded-[30px]
          outline-none focus:outline-none
          focus:bg-white
          transition-all
          `}/>

       <img 
        src={images.search_icon} 
        alt="검색 아이콘"
        className="absolute top-[13px] left-[373px]" />
      
    </div>
  )
}
