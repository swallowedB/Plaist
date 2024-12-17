import images from "../../../../assets/images/importImages";
import CourseSortToggle from "../../utils/CourseSortToggle";
import CommentInputArea from "./CommentInputArea";
import CommentList from "./CommentList";

export default function CourseContentCommentArea({
  courseObj,
}: {
  courseObj: Course;
}) {
  return (
    <div className="flex mx-[45px] mb-[90px] flex-col gap-[45px] text-custom-black font-pretendard">
      <CommentInputArea courseObj={courseObj} />
      <img src={images.course_comment_line_img} alt="" />
      <div>
        {/* 댓글 헤더 */}
        <div className="flex justify-between">
          <p className="text-[21px] font-semibold text-primary-600">댓글</p>
          <CourseSortToggle />
        </div>
        {/* 댓글 바디 */}
        <CommentList />
      </div>
    </div>
  );
}
