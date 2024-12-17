import { NavLink } from "react-router-dom"; // 'react-router-dom'으로 수정
import images from "../../assets/images/importImages";

export default function FixedCreateButton() {
  return (
    <button className="fixed bottom-24 right-2">
      {/* 'CreateMyCourse' 페이지로 이동하도록 수정 */}
      <NavLink to="/my-course-builder">
        <img
          src={images.start_create_button}
          alt="fixed-create-course-button"
        />
      </NavLink>
    </button>
  );
}
