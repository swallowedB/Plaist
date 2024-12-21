export default function TestCard() {
  return (
    <div className="w-[205px] h-[298px] relative bg-white rounded-3xl shadow">
      <img
        className="w-[186.42px] h-[222.15px] left-[9.29px] top-[10.93px] absolute rounded-[17px]"
        src="https://via.placeholder.com/186x222"
      />
      <div className="w-[176.42px] h-[46px] left-[14.29px] top-[241.07px] absolute">
        <div className="w-[176.42px] h-[26.32px] left-0 top-0 absolute">
          <div className="w-[123.91px] h-[26.32px] left-0 top-0 absolute text-[#2d2d2d] text-sm font-medium font-['Pretendard'] leading-normal">
            ✨ 2025 새해 모임
          </div>
          <div className="w-[37.42px] h-5 left-[139px] top-[1px] absolute">
            <div className="left-[12.42px] top-0 absolute text-right text-[#1b1e28] text-[13px] font-normal font-['Pretendard'] leading-tight">
              4.7k
            </div>
          </div>
        </div>
        <div className="w-[108px] h-6 left-0 top-[22px] absolute">
          <div className="left-[18px] top-0 absolute text-[#7c838d] text-xs font-normal font-['Pretendard'] leading-normal">
            Seoul, GangNam
          </div>
          <div className="w-4 h-4 left-0 top-[4px] absolute flex-col justify-start items-start inline-flex" />
        </div>
      </div>
      <div className="w-7 h-7 left-[159px] top-[18px] absolute">
        <div className="w-7 h-7 left-0 top-0 absolute bg-[#2d2d2d]/20 rounded-full" />
      </div>
    </div>
  );
}
