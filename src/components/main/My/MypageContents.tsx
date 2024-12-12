
import MypageCategoryTap from "./MypageCategoryTap";
import MypageMyCourse from "./MypageMyCourse";
import MypageProfile from "./MypageProfile";
import MypageSearch from "./MypageSearch";


export default function MypageContents() {
  return (
    <div className={`
      w-full flex justify-center items-center`}>
        
      <div className={`w-[647px] h-[992px] bg-white/25 rounded-[25px] 
            border-2 border-white z-10 shadow-default mt-[119px]`} >

        {/*창 안의 요소*/}
        <div className="flex flex-col items-center mt-[117px]">

          {/*프로필 요소*/}
          <MypageProfile />

          {/* 마이페이지 - 카테고리 탭 */}
          <MypageCategoryTap />

          {/* 검색바 */}
          <MypageSearch />

          {/* 탭1 - 마이코스 */}
          <MypageMyCourse />
        </div>
      </div>
    </div>
  )
}
