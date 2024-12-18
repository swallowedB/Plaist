import { useMemo } from "react";
import { useCommentStore } from "../../../../stores/main/comment/useCommentStore";
import { useSortStore } from "../../../../stores/main/comment/useSortStore";
import {
  convertDateFormatt,
  sortByCreatedAtDesc,
  sortByCreatedAtIncre,
} from "../../../../utills/main/fomatter";
import CommentListItem from "./CommentListItem";

export default function CommentList() {
  const { comments } = useCommentStore();
  const { activeSort } = useSortStore();

  const sortedComments = useMemo(() => {
    if (activeSort === "oldest") {
      return sortByCreatedAtIncre(comments);
    } else if (activeSort === "latest") {
      return sortByCreatedAtDesc(comments);
    }
    return comments;
  }, [comments, activeSort]);

  return (
    <ul className="flex flex-col gap-10 mt-[61px]">
      {sortedComments.map((comment, idx) => (
        <CommentListItem
          key={idx}
          userId={comment.author._id}
          userName={comment.author.fullName}
          createdAt={convertDateFormatt(comment.createdAt)}
          comment={comment.comment}
        />
      ))}
    </ul>
  );
}
