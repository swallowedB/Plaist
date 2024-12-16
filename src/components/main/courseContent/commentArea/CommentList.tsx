import { convertDateFormatt } from "../../../../utills/main/fomatter";
import CommentListItem from "./CommentListItem";

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <>
      <ul className="flex flex-col gap-10 mt-[61px]">
        {comments.map((comment, idx) => {
          return (
            <CommentListItem
              key={idx}
              userName={comment.author.fullName}
              createdAt={convertDateFormatt(comment.author.createdAt)}
              comment={comment.comment}
            />
          );
        })}
      </ul>
    </>
  );
}
