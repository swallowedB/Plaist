import { NavLink } from "react-router";

export default function ViewMyCourseHeader() {
  return (
    <div
      id="viewmycourse-flexbox--toparea"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-[60px] font-rubik text-white mt-[166px] mb-[37px]">
        My Course
      </h1>
      <NavLink
        to="../flow1-select-style"
        className="text-center w-[285px] h-[47px] bg-primary-500 border-2 border-white/40 text-white font-pretendard text-[20px] font-semiBold rounded-[30px] shadow-backblue border-white leading-[47px]"
      >
        나만의 코스 만들기
      </NavLink>
    </div>
  );
}
