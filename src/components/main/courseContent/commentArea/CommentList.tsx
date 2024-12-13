import CommentListItem from "./CommentListItem";

export default function CommentList() {
  return (
    <>
      <ul className="flex flex-col gap-10 mt-[61px]">
        <CommentListItem userName={"devboa"} createdAt={"1일 전"} comment={"댓글 내용"} />
        <CommentListItem userName={"devboa"} createdAt={"1일 전"} comment={"댓글 내용"} />
        <CommentListItem userName={"devboa"} createdAt={"1일 전"} comment={"댓글 내용"} />
      </ul>
    </>
  );
}
