export default function CreateCourse() {
  return (
    <>
      <h1 className="left-[226px] top-[166px] absolute text-white text-6xl font-normal font-['Rubik Bubbles'] leading-10">
        My Course
      </h1>
      <button className="w-72 h-12 left-[241px] top-[263px] absolute bg-blue-500 rounded-3xl shadow border-2 border-white/50 flex items-center justify-center text-center text-white text-xl font-semibold font-['Pretendard'] leading-7">
        나만의 코스 만들기
      </button>

      <div className="w-96 h-20 left-[176px] top-[385px] absolute">
        <div className="left-[126px] top-0 absolute text-center text-white text-lg font-semibold font-['Pretendard'] leading-7">
          마이 코스를 검색하세요
        </div>
        <div className="w-3.5 h-3.5 left-[331px] top-[48px] absolute" />
        <div className="w-96 h-12 left-0 top-[39px] absolute">
          <div className="w-96 h-12 left-0 top-0 absolute bg-white rounded-3xl shadow" />
          <div className="w-6 h-6 left-[366px] top-[12px] absolute" />
          <div className="w-60 h-5 left-[26px] top-[12px] absolute text-gray-500 text-base font-medium font-['Pretendard'] leading-tight tracking-tight">
            무엇을 찾으시나요?
          </div>
        </div>
      </div>
    </>
  );
}
