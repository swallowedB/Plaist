import MyCommentCardItem from "./MyCommentCardItem";


export default function MyCommentCards({ data= [] }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 hover:cursor-pointer">
        {data.map((comment, index) => (
            <MyCommentCardItem 
              key={index} 
              comment={comment}
            />
        ))}
      </div>
    </div>
  )
}
