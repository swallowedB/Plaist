import MyCommentCardItem from "./MyCommentCardItem";

type PostData = {
  id: string;
  title: string;
  likes: number;
  location: string;
  comments: CommentData[];
};

type CommentData = {
  id: string;
  comment: string;
  createdAt: string;
};

type MyCommentCardsProps = {
  data?: PostData[];
};


export default function MyCommentCards({ data= [] }:MyCommentCardsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 hover:cursor-pointer">
        {data.map((post) => (
          post.comments.map((comment) => (
            <MyCommentCardItem 
              key={comment.id} 
              post={post}
              comment={comment}
            />
          ))
        ))}
      </div>
    </div>
  )
}
