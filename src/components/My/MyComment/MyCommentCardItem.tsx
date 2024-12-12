import images from "../../../assets/images/importImages"

export default function MyCommentCardItem() {
  return (
    <div>
      <div className={`
        w-[542px] h-[128px] rounded-2xl bg-white shadow-strong
        relative flex flex-col items-center justify-center py-2 px-4
        `}>

        {/* card */}
        <div className="flex flex-col items-center justify-between gap-[10px] w-[480px] h-[93px]">
          
          {/* contents #1 */}
          <div className="flex flex-row items-center justify-between w-full">

            {/* 게시글 제목 */}
            <p className="font-pretendard text-[16px] font-medium text-custom-black">✨ 2025 새해 모임</p>

            {/* 수정/삭제 버튼 */}
            <div className="flex flex-row items-center gap-3">
              <button
                className="font-pretendard font-regular text-xs text-primary-600"
              >수정</button>
              <p className="font-pretendard font-regular text-xs text-custom-gray">|</p>
              <button
                className="font-pretendard font-regular text-xs text-primary-600"
              >삭제</button>
            </div>
          </div>

          {/* contents #2 */}
          <div className="flex items-start w-full">
            {/* 댓글 본문 미리보기 */}
            <p className="w-[419px] font-pretendard font-regular text-xs text-custom-gray">
              4~5명이 모여서 즐기기 딱 좋은 코스였습니다👍 좋은 정보 공유 감사합니다😇
            </p>
          </div>

          {/* contents #3 */}
          <div className="flex flex-row items-center justify-between w-full">
            
            {/* 주소 및 작성일 */}
            <div className="flex flex-row items-center mt-[3px] ">
              <img
                src={images.location_icon}
                alt="Location Icon"
                className="w-4 h-4 mr-1"/>
              <div className={`flex flex-row items-center gap-2 font-pretendard text-xs text-custom-gray font-regular
                `}>
                <p>Seoul, GangNam</p>
                <p>|</p>
                <p>2024.10.10</p>
              </div>
            </div>

            {/* 좋아요 수 */}
            <div className="flex flex-row items-center">
              <img src={images.like_filled_icon} alt="좋아요 아이콘" className="w-3 h-3" />
              <p className="ml-1 leading-5 font-pretendard text-[13px] font-regular text-custom-black">4.7k</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
