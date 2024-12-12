// import { NavLink } from "react-router";

// export default function ViewMycourse() {
//   return (
//     <>
//       <nav>
//         {/* 상대 경로로 이동 */}
//         <NavLink to="../flow1-select-style">생성 버튼</NavLink>
//       </nav>
//     </>
//   );
// }

import Search from "../../components/createCourse/Search";
import Feed from "../../components/category/Feed";
import { NavLink } from "react-router";

export default function CreateCourse() {
  return (
    <section className="blurTop grid place-items-center bg-white">
      <header className="text-white grid place-items-center mt-[103px] z-10">
        <h1 className="font-rubik font-normal text-6xl leading-[80px]">
          My Course
        </h1>
      </header>
      <NavLink
        to="../flow1-select-style"
        className="w-[285px] h-[47px] mt-[37px] text-[20px] bg-blue-500 rounded-3xl shadow-blue border-2 border-white/50 text-center text-white font-medium font-pretendard leading-[38px] z-10"
      >
        나만의 코스 만들기
      </NavLink>
      <Search />
      <section className="category--glassbox mt-[42px] px-[30px] py-[30px] overflow-hidden">
        {/* 임시 포스트 */}
        <Feed />
      </section>
    </section>
  );
}
