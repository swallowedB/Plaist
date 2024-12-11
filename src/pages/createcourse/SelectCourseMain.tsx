import { NavLink } from "react-router";
export default function SelectView() {
  return (
    <>
      <div>코스 생성 페이지 메인</div>;
      <nav>
        <NavLink to="map-view">새로운 코스 생성</NavLink>
      </nav>
      ;
    </>
  );
}
