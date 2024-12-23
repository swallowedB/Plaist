export default function MainTitle({ className }: { className: string }) {
  return (
    <div
      className={`${className} text-white w-[321px] h-[100px] mb-[104px] mt-[50px]`}
    >
      <p
        style={{ textShadow: "0px 3px 15px rgba(47, 125, 215, 0.30)" }}
        className=" text-[21px] font-Pretendard font-medium"
      >
        Your Shortcut to Great Days
      </p>
      <div
        style={{ textShadow: "0px 3px 15px rgba(47, 125, 215, 0.30)" }}
        className="box-content text-6xl font-rubik"
      >
        <p>Plan Less,</p>
        <p>Play More</p>
      </div>
    </div>
  );
}
