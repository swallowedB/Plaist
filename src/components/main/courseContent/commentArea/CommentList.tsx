import CommentListItem from "./CommentListItem";

export default function CommentList() {
  return (
    <>
      <ul className="flex flex-col gap-10 mt-[61px]">
        <CommentListItem />
      </ul>
    </>
  );
}
