import MypageCategoryTap from "./MypageCategoryTap";
import MypageProfile from "./MypageProfile";

export default function MypageContents() {
  return (
    <div className={`absolute z-[100] top-[117px]`}>
      <div
        className={`flex flex-col items-center w-[647px] h-full bg-primary-300/15 rounded-t-[25px] 
            border-2 border-white z-10 shadow-default py-20 min-h-[960px] `}>

        {/*창 안의 요소*/}
        <div className=" relative flex flex-col items-center mt-[35px] h-full w-[555px]">
          {/*프로필 요소*/}
          <MypageProfile />

          {/* 마이페이지 - 카테고리 탭 */}
          <MypageCategoryTap />

        </div>
      </div>
    </div>
  );
}
