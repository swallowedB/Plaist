import MyCommentCardItem from "./MyCommentCardItem";

type TestData = {
  id: number;
  title: string;
  comments: string;
  likes: number;
  location: string;
  createdAt: string;
};


type MyCommentCardsProps = {
  data?: TestData[];
};

export default function MyCommentCards({ data= [] }:MyCommentCardsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 hover:cursor-pointer">
        {data.map((item) => (
          <MyCommentCardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
