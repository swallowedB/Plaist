import { NavLink } from "react-router";

export default function ViewMycourse() {
  return (
    <>
      <>
        <div
          id="content-area-container"
          className=" bg-primary-200 min-w-[767px]"
        >
          <div
            id="viewmycourse-flexbox--toparea"
            className="flex flex-col justify-center items-center"
          >
            <h1 className="text-[60px] font-rubik text-white mt-[166px] mb-[37px]">
              Mycourse
            </h1>
            <button className="w-[285px] h-[47px] bg-primary-500 text-white font-pretendard text-[20px] font-semiBold rounded-[30px] shadow-backblue border-white mb-[64px]">
              나만의 코스 만들기
            </button>
            <h2 className="text-white font-pretendard text-[18px] leading-7 font-semiBold mb-[11px]">
              마이코스를 검색하세요
            </h2>
            <div className="mb-[42px]">검색바 위치</div>
          </div>
          <div id="viewmycourse-gridbox--mainarea" className=""></div>
          <nav>
            {/* 상대 경로로 이동 */}
            <NavLink to="../flow1-select-style">생성 버튼</NavLink>
          </nav>
        </div>
      </>
    </>
  );
}
