import MypageCardItem from "./MypageCardItem";

type MypageCardsProps = {
  data: CardData[];
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
