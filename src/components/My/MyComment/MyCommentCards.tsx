import MyCommentCardItem from "./MyCommentCardItem";

interface CommentType {
  author: string;
  comment: string;
  createdAt: string;
  post: string;
  _id: string;
};

interface MyCommentCardsProps {
  data: CommentType[]; 
  postTitles: { 
    [key: string]: { 
      likes?: number,
      courseTitle: string; 
      locationObjs: { locationName: string }[];
    }; 
  };
}

export default function MyCommentCards({
  data,
  postTitles,
}:  MyCommentCardsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 hover:cursor-pointer">
        {data.map((comment) => {
          const post = postTitles[comment.post];
          const locationNames = post?.locationObjs.map((loc) => loc.locationName) || [];
          return (
            <MyCommentCardItem 
            key={comment._id} 
            comment={comment} 
            likes={post?.likes || 0}
            courseTitle={post?.courseTitle || "제목 없음"}
            locationNames={locationNames}
            />
          )
        })}
      </div>
    </div>
  )
}