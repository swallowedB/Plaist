import { NavLink } from "react-router";
import images from "../../assets/images/importImages";
export default function StartCourse() {
  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={images.progress_bar1} alt="Progress bar-select-course" />
        </figure>
      </aside>
      flow1-select-style
      <nav>
        <NavLink to="../flow2-select-course">다음</NavLink>
      </nav>
    </div>
  );
}
