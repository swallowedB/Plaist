import CommentList from "./CommentList";
import CommentInputArea from "./CommentInputArea";

import CourseCommentSortToggle from "../../utils/CourseCommentSortToggle";
import images from "../../../../assets/images/importImages";

export default function CourseContentCommentArea({
  courseObj,
}: {
  courseObj: Course;
}) {
  return (
    <div className="flex mx-[45px] flex-col gap-[45px] text-custom-black font-pretendard">
      <CommentInputArea courseObj={courseObj} />
      <img src={images.course_comment_line_img} alt="" />
      <div>
        {/* 댓글 헤더 */}
        <div className="flex justify-between">
          <p className="text-[21px] font-semibold text-primary-600">댓글</p>
          <CourseCommentSortToggle />
        </div>
        {/* 댓글 바디 */}
        <CommentList />
      </div>
    </div>
  );
}
