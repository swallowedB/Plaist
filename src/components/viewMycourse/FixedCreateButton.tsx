import { NavLink } from "react-router";
import images from "../../assets/images/importImages";
export default function FixedCreateButton() {
  return (
    <button className="fixed bottom-24 right-2">
      <NavLink to="../flow1-select-style">
        <img
          src={images.start_create_button}
          alt="fixed-create-course-button"
        />
      </NavLink>
    </button>
  );
}
