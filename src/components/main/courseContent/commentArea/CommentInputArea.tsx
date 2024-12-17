import { useEffect, useState } from "react";
import images from "../../../../assets/images/importImages";
import { postComment } from "../../../../api/commentApi";
import { useCommentStore } from "../../../../stores/main/comment/useCommentStore";
import { useUserStore } from "../../../../stores/userInfoStore";

export default function CommentInputArea({ courseObj }: { courseObj: Course }) {
  const { comments, setComments } = useCommentStore();
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { _id } = courseObj;
  const contentId = _id;

  const { userInfo, fetchUserInfo } = useUserStore();
  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onCommentSubmitHandler = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (comment.trim() === "") {
      alert("댓글 내용을 입력해 주세요.");
      setIsSubmitting(false);
      return;
    }
    try {
      const newComment = {
        author: {
          fullName: userInfo.fullName,
        },
        createdAt: new Date().toISOString(),
        comment,
      } as Comment;
      setComments([newComment, ...comments]);

      await postComment({ contentId, comment });
      console.log("댓글 입력 완료");

      setComment("");
    } catch (error) {
      console.error("댓글 제출 중 오류 발생:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onEnterKeyDownHandler = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      onCommentSubmitHandler();
    }
  };

  return (
    <div className="flex flex-col gap-[23px]">
      {/* 네임카드와 댓글 개수 표시 */}
      <div className="flex items-center justify-between">
        {/* 네임카드 */}
        <div className="flex items-center gap-[10px]">
          <img
            src={images.course_user_profile_img}
            alt=""
            className="w-10 h-10 rounded-full bg-primary-200"
          />
          <div className="text-base font-bold text-primary-800">
            {userInfo.fullName}
          </div>
        </div>
        {/* 코맨트 개수 */}
        <div className="flex items-center gap-1 px-[9px]">
          <img
            src={images.course_comment_icon}
            alt="댓글 아이콘 이미지"
            className="w-[14px] h-[15px]"
          />
          <p className="text-[13px] font-regular leading-5 text-primary-700">
            {comments.length}
          </p>
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onCommentSubmitHandler();
          }}
        >
          <textarea
            spellCheck="true"
            onChange={onInputChangeHandler}
            onKeyDown={onEnterKeyDownHandler}
            placeholder="타자를 두들길 준비 되셨나요? (｡･∀･)ﾉﾞ"
            className="w-[558px] h-[107px] bg-[#F3F2F3] rounded-[15px] px-5 py-6 text-[13px] "
            value={comment}
          />
        </form>
      </div>
    </div>
  );
}
