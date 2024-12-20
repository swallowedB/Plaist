import { useEffect, useState } from "react";
import images from "../../../assets/images/importImages";
import { deleteLikes, postLikes } from "../../../api/react-query/likeApi";
import { getUserIdFromToken } from "../../../api/userApi";
import { toast } from "react-toastify";

export default function LikeButton({
  courseObj,
  onLike,
}: {
  courseObj: Course;
  onLike: (calc: 1 | -1) => void;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState<string | null>(null);
  const { _id } = courseObj || {};
  const userId = getUserIdFromToken();

  useEffect(() => {
    const userLike = courseObj.likes.find((like) => like.user === userId);
    if (userLike) {
      setIsLiked(true);
      setLikeId(userLike._id);
    } else {
      setIsLiked(false);
      setLikeId(null);
    }
  }, [courseObj.likes, userId]);

  // 좋아요 버튼 클릭 핸들러
  const onLikeButtonClickHandler = async () => {
    if (!_id) return;
    try {
      if (!isLiked) {
        const res = await postLikes(_id);
        setLikeId(res._id);
        onLike(1);
        setIsLiked(true);
      } else {
        if (!likeId) return;
        await deleteLikes(likeId);
        setLikeId(null);
        onLike(-1);
        setIsLiked(false);
      }
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
      toast.error(
        <span
          dangerouslySetInnerHTML={{
            __html:
              "좋아요 처리에 실패했습니다.<br /> 로그인 여부를 확인해 주세요.",
          }}
        />
      );
    }
  };

  return (
    <button
      onClick={onLikeButtonClickHandler}
      className={`absolute h-[49px] w-[49px] bg-custom-black opacity-80 rounded-full 
        right-[60px] top-[-79px] flex justify-center items-center cursor-pointer pt-[4px]`}
    >
      {isLiked ? (
        <img src={images.white_heart_filled_icon} alt="" className="" />
      ) : (
        <img src={images.white_heart_not_filled_icon} alt="" className="" />
      )}
    </button>
  );
}
