import MyCommentCardItem from "./MyCommentCardItem";


export default function MyCommentCards() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 hover:cursor-pointer">
        <MyCommentCardItem />
      </div>
    </div>
  )
}
