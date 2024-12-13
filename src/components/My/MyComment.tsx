import MyCommentCards from "./MyComment/MyCommentCards";

export default function MyComment() {
  return (
    <div className="flex flex-col flex-grow-1 gap-[18px] mt-[40px] ">
      <MyCommentCards />
      <MyCommentCards />
      <MyCommentCards />
    </div>
  )
}
