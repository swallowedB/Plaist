import { useCommentStore } from "../../../../stores/main/commentsStore";
import { convertDateFormatt } from "../../../../utills/main/fomatter";
import CommentListItem from "./CommentListItem";

export default function CommentList() {
  const { comments } = useCommentStore();

  return (
    <>
      <ul className="flex flex-col gap-10 mt-[61px]">
        {comments.map((comment, idx) => {
          return (
            <CommentListItem
              key={idx}
              userName={comment.author.fullName}
              createdAt={convertDateFormatt(comment.createdAt)}
              comment={comment.comment}
            />
          );
        })}
      </ul>
    </>
  );
}
