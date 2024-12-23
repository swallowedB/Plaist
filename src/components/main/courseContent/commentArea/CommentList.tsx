import { useMemo } from "react";

import CommentListItem from "./CommentListItem";

import {
  convertDateFormatt,
  sortByCreatedAtDesc,
  sortByCreatedAtIncre,
} from "../../../../utills/main/fomatter";
import { useSortStore } from "../../../../stores/main/comment/useSortStore";
import { useCommentStore } from "../../../../stores/main/comment/useCommentStore";

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
  console.log(sortedComments);
  return (
    <ul className="flex flex-col gap-10 mt-[61px]">
      {sortedComments.length !== 0 ? (
        <>
          {sortedComments.map((comment, idx) => (
            <CommentListItem
              key={idx}
              userId={comment.author._id!}
              userName={comment.author.fullName}
              createdAt={convertDateFormatt(comment.createdAt)}
              comment={comment.comment}
            />
          ))}
        </>
      ) : (
        <p className="text-base text-custom-gray font-pretendard">
          아직 댓글이 없습니다.
        </p>
      )}
    </ul>
  );
}
