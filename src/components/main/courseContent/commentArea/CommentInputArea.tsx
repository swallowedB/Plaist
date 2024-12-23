import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { postComment } from "../../../../api/commentApi";
import images from "../../../../assets/images/importImages";
import { useUserStore } from "../../../../stores/useInfoStore";
import { createNotification } from "../../../../api/notificationApi";
import { useIsLoginStore } from "../../../../stores/login/useIsLoginStore";
import { useCommentStore } from "../../../../stores/main/comment/useCommentStore";

export default function CommentInputArea({ courseObj }: { courseObj: Course }) {
  const { comments, setComments } = useCommentStore();
  const { userInfo, userProfilePic, fetchUserInfo } = useUserStore();

  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { _id: contentId } = courseObj;

  const [profilePic] = useState(userProfilePic);
  console.log(userInfo);
  const { isLogin } = useIsLoginStore();
  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (isSubmitting || comment.trim() === "") {
      if (comment.trim() === "") {
        toast.error("댓글 내용을 입력해 주세요.");
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // 댓글 데이터 생성
      const newComment: Comment = {
        author: { fullName: userInfo.fullName },
        createdAt: new Date().toISOString(),
        comment,
      };

      // UI 업데이트
      setComments([newComment, ...comments]);

      // 서버로 댓글 전송
      const commentResult = await postComment({ contentId, comment });
      console.log("댓글 저장 결과:", commentResult);

      // 알림 생성
      await createNotification(
        "COMMENT",
        commentResult._id,
        courseObj.author._id,
        commentResult.post
      );

      // 입력 필드 초기화
      setComment("");
    } catch (error) {
      console.error("댓글 제출 중 오류 발생:", error);
      toast.error(
        "댓글을 제출하는 중 문제가 발생했습니다. 다시 시도해 주세요."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCommentSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-[23px]">
      {/* 네임카드와 댓글 개수 표시 */}
      <div className="flex items-center justify-between">
        {/* 네임카드 */}
        <div className="flex items-center gap-[10px]">
          {isLogin && (
            <img
              src={profilePic}
              alt="유저 프로필 이미지"
              className="w-10 h-10 overflow-hidden bg-center bg-cover rounded-full bg-primary-200"
            />
          )}

          <div className="text-base font-bold text-primary-800">
            {isLogin ? userInfo.fullName : ""}
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
      {
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommentSubmit();
            }}
          >
            <textarea
              maxLength={1000}
              spellCheck="true"
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyPress}
              placeholder={`${
                isLogin
                  ? `타자를 두들길 준비 되셨나요?:} (｡･∀･)ﾉﾞ`
                  : `로그인 후 댓글을 남겨보세요. (｡･∀･)ﾉﾞ`
              }`}
              className="w-[558px] h-[107px] bg-[#F3F2F3] rounded-[15px] px-5 py-6 text-[13px] resize-none"
              value={comment}
              disabled={isLogin ? false : true}
            />
          </form>
        </div>
      }
    </div>
  );
}
