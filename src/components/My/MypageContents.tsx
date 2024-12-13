import MypageCategoryTap from "./MypageCategoryTap";
import MypageProfile from "./MypageProfile";

export default function MypageContents() {
  return (
    <div className={`absolute z-[100] top-[117px]`}>
      <div
        className={`flex flex-col items-center w-[647px] h-screen bg-primary-300/15 rounded-[25px] 
            border-2 border-white z-10 shadow-default`}>

        {/*창 안의 요소*/}
        <div className="flex flex-col items-center mt-[117px] h-full">
          {/*프로필 요소*/}
          <MypageProfile />

          {/* 마이페이지 - 카테고리 탭 */}
          <MypageCategoryTap />
          
        </div>
      </div>
    </div>
  );
}
