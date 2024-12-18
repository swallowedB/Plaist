import MypageCardItem from "./MypageCardItem";

type TestData = {
  id: number | string;
  title: string;
  likes: number;
  location: string;
};

type MypageCardsProps = {
  data?: TestData[];
};

export default function MypageCards({ data = [] }: MypageCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      {data.map((item) => (
        <MypageCardItem key={item.id} data={item} />
      ))}
    </div>
  );
}
