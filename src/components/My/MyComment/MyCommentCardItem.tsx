import { useEffect } from "react";
import { Link } from "react-router";

import { deleteComment } from "../../../api/commentApi";
import images from "../../../assets/images/importImages";
import { useCommentsStore } from "../../../stores/useCommentsStore";

interface CommentType {
  author: string;
  comment: string;
  createdAt: string;
  post: string;
  _id: string;
}

interface MyCommentCardItemProps {
  comment: CommentType;
  courseTitle: string;
  locationNames: string[];
  likes: number;
}

export default function MyCommentCardItem({
  comment,
  courseTitle,
  locationNames,
  likes,
}: MyCommentCardItemProps) {
  const { fetchComments } = useCommentsStore();

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleDelete = async (id: string) => {
    try {
      await deleteComment(id);
      console.log(`Deleted comment with ID: ${id}`);
      await fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="relative">
      <Link to={`/course-content/${comment.post}`}>
        <div
          className={`
          w-[542px] h-[128px] rounded-2xl bg-white shadow-strong
          relative flex flex-col items-center justify-center py-2 px-4
          `}
        >
          {/* card contents */}
          <div className="flex flex-col items-center justify-between gap-[10px] w-[480px] h-[93px]">
            {/* contents #1 */}
            <div className="flex flex-row items-center justify-between w-full">
              {/* 게시글 제목 */}
              <p className="font-pretendard text-[16px] font-medium text-custom-black">
                {courseTitle}
              </p>
            </div>

            {/* contents #2 */}
            <div className="flex items-start w-full">
              {/* 댓글 본문 미리보기 */}
              <p className="w-[419px] font-pretendard font-regular text-xs text-custom-gray">
                {comment.comment.length > 35
                  ? `${comment.comment.slice(0, 35)}...더보기`
                  : comment.comment || "내용 없음"}
              </p>
            </div>

            {/* contents #3 */}
            <div className="flex flex-row items-center justify-between w-full">
              {/* 주소 및 작성일 */}
              <div className="flex flex-row items-center mt-[3px] ">
                <img
                  src={images.location_icon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-1"
                />
                <div
                  className={`flex flex-row items-center gap-2 font-pretendard text-xs text-custom-gray font-regular
                  `}
                >
                  <p>{locationNames}</p>
                  <p>|</p>
                  <p>
                    {new Date(comment.createdAt).toLocaleDateString() ||
                      "날짜 없음"}
                  </p>
                </div>
              </div>

              {/* 좋아요 수 */}
              <div className="flex flex-row items-center">
                <img
                  src={images.like_filled_icon}
                  alt="좋아요 아이콘"
                  className="w-3 h-3"
                />
                <p className="ml-1 leading-5 font-pretendard text-[13px] font-regular text-custom-black">
                  {likes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* 삭제 버튼 */}
      <div className="absolute top-[12px] left-[489px]">
        <button
          className="text-xs font-pretendard font-regular text-primary-600"
          onClick={() => handleDelete(comment._id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
