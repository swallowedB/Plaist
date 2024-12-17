import { deleteLikes, postLikes } from "../../../api/react-query/likeApi";

const [likeId, setLikeId] = useState<string | null>(null);

export const onLikeButtonClickHandler = async () => {
  try {
    if (!isLiked) {
      const res = await postLikes(_id);
      console.log(res);
      setLikeId(res._id);
      console.log("좋아요 성공", res._id);
      setIsLiked(true);
    } else {
      if (!likeId) return;
      const res = await deleteLikes(likeId);
      console.log("좋아요 삭제 성공", res);
      setLikeId(null);
      setIsLiked(false);
    }
  } catch (error) {
    console.error("좋아요 처리 중 오류 발생:", error);
  }
};
