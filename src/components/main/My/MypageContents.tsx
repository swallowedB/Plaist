import MyComment from "./MyComment";
import MyLike from "./MyLike";
import MypageCategoryTap from "./MypageCategoryTap";
import MypageMyCourse from "./MypageMyCourse";
import MypageProfile from "./MypageProfile";
import MypageSearch from "./MypageSearch";

export default function MypageContents() {
  return (
    <div
      className={`
      flex justify-center items-center`}
    >
      <div
        className={`w-[647px] h-full bg-white/25 rounded-[25px] 
            border-2 border-white z-10 shadow-default mt-[250px]`}
      >
        {/*창 안의 요소*/}
        <div className="flex flex-col items-center mt-[117px] h-full">
          {/*프로필 요소*/}
          <MypageProfile />

          {/* 마이페이지 - 카테고리 탭 */}
          <MypageCategoryTap />

          {/* 검색바 */}
          <MypageSearch />
          {/* 탭1 - 라이크 */}
          {/*<MyLike />*/}

          {/* 탭2 - 마이코스 */}
          {/*<MypageMyCourse />*/}

          {/* 탭3 - 댓글 */}
          <MyComment />
        </div>
      </div>
    </div>
  );
}
