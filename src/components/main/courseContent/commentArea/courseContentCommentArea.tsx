import images from "../../../../assets/images/importImages";
import CourseSortToggle from "../../utils/CourseSortToggle";

export default function courseContentCommentArea() {
  return (
    <div className="flex mx-[45px] mb-[90px] flex-col gap-[45px] text-custom-black font-pretendard">
      <div className="flex flex-col gap-[23px]">
        {/* 네임카드와 댓글 개수 표시 */}
        <div className="flex items-center justify-between">
          {/* 네임카드 */}
          <div className="flex items-center gap-[10px]">
            <div className="w-10 h-10 rounded-full bg-primary-200" />
            <div>imaria0218</div>
          </div>
          {/* 코맨트 개수 */}
          <div className="flex items-center gap-1 px-[9px]">
            <img
              src={images.course_comment_icon}
              alt=""
              className="w-[14px] h-[15px]"
            />
            <p className="text-[13px] font-regular leading-5 text-primary-700">213</p>
          </div>
        </div>
        <div>
          <form>
            <textarea
              placeholder="타자를 두들길 준비 되셨나요? (｡･∀･)ﾉﾞ"
              className="w-[558px] h-[107px] bg-[#F3F2F3] rounded-[15px] px-5 py-6 text-[13px] "
            />
          </form>
        </div>
      </div>
      <img src={images.course_comment_line_img} alt="" />
      <div>
        <p>댓글</p>
      <CourseSortToggle />
        
      </div>
    </div>
  );
}
