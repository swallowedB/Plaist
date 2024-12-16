import { useEffect } from "react";
import images from "../../../assets/images/importImages"
import { useCommentsStore } from "../../../stores/useCommentsStore";

type CommentData = {
  id: string;
  comment: string;
  createdAt: string;
};

type PostData = {
  id: string;
  title: string;
  likes: number;
  location: string;
};

type MyCommentCardItemProps = {
  post: PostData;
  comment: CommentData;
};
export default function MyCommentCardItem({ post, comment }: MyCommentCardItemProps) {
  const { fetchComments, deleteComment } = useCommentsStore();

  useEffect(() => {
    fetchComments();
  }, []);

  const handleDelete = async (id: string) => {
    try{
      await deleteComment(id);
      console.log(`Deleted comment with ID: ${id}`);
      await fetchComments();
    } catch (error){
      console.error("Error deleting comment:", error);
    }
  };

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
            <p className="font-pretendard text-[16px] font-medium text-custom-black">{post.title}</p>

            {/* 수정/삭제 버튼 */}
            <div className="flex flex-row items-center gap-3">
              <button
                className="font-pretendard font-regular text-xs text-primary-600"
                onClick={() => console.log(`Editing comment with ID: ${comment.id}`)}
              >수정</button>
              <p className="font-pretendard font-regular text-xs text-custom-gray">|</p>
              <button
                className="font-pretendard font-regular text-xs text-primary-600"
                onClick={() => handleDelete(comment.id)}
              >삭제</button>
            </div>
          </div>

          {/* contents #2 */}
          <div className="flex items-start w-full">
            {/* 댓글 본문 미리보기 */}
            <p className="w-[419px] font-pretendard font-regular text-xs text-custom-gray">
              {comment.comment}
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
                <p>{post.location}</p>
                <p>|</p>
                <p>{comment.createdAt}</p>
              </div>
            </div>

            {/* 좋아요 수 */}
            <div className="flex flex-row items-center">
              <img src={images.like_filled_icon} alt="좋아요 아이콘" className="w-3 h-3" />
              <p className="ml-1 leading-5 font-pretendard text-[13px] font-regular text-custom-black">{post.likes}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
