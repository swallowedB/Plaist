import { NavLink } from "react-router";

export default function ViewMycourse() {
  return (
    <>
      <nav>
        {/* 상대 경로로 이동 */}
        <NavLink to="../flow1-select-style">생성 버튼</NavLink>
      </nav>
    </>
  );
}
