import { useState } from "react"
import MypageMyCourse from "./MypageMyCourse";
import MyLike from "./MyLike";
import MyComment from "./MyComment";

export default function MypageCategoryTap() {
  const [activeTab, setActiveTab] = useState(1);
  const tabs = ["라이크", "마이 코스", "댓글"];

  const handleClick = (index:number) => {
    setActiveTab(index);
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 0:
        return <MyLike />
      case 1:
        return <MypageMyCourse />
      case 2:
        return <MyComment />
    }
  };


  return (
    <div className="flex flex-col items-center">
      {/* 탭 영역 */}
      <div className="flex flex-row items-center gap-3 mt-[35px] relative">
        {/* 클릭시 이동할 배경요소 */}
        <div
          className={`absolute z-10 bg-white/70 rounded-[17px] w-[88px] h-[33px] 
                      transition-transform duration-200 ease-out-sine`}
          style={{transform: `translateX(${activeTab * 100}px)`}}
        />

        {/* Tab */}
        {tabs.map((tab,index)=> (
          <div 
          key={index}
          className={`hover:cursor-pointer rounded-[17px] w-[88px] h-[33px] flex items-center justify-center z-20`}
            onClick={() => handleClick(index)}
          >
            <p className={`font-pretendard font-semiBold text-[16px] 
              ${activeTab === index ? "text-primary-700" : "text-primary-900" }` }>{tab}</p>
          </div>
        ))}
      </div>

      {/* 컴포넌트 렌더링 영역 */}
      <div className="mt-[35px]">
        {renderActiveTab()}
      </div>
    </div>
  )
}
