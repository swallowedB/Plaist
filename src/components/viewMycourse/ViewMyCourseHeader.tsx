import { NavLink } from "react-router";

export default function ViewMyCourseHeader() {
  return (
    <div
      id="viewmycourse-flexbox--toparea"
      className="flex flex-col justify-center items-center"
    >
      <h1
        style={{ textShadow: "0px 3px 15px rgba(47, 125, 215, 0.30)" }}
        className="text-[60px] font-rubik text-white mb-[37px]"
      >
        My Course
      </h1>
      <NavLink
        to="../"
        className={`text-center w-[285px] h-[50px] bg-primary-500 border-2 border-white/65 text-white 
          font-pretendard text-[20px] font-semiBold rounded-[30px] shadow-backblue border-white leading-[47px]`}
      >
        나만의 코스 만들기
      </NavLink>
    </div>
  );
}
