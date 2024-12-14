import { useNavigate } from "react-router";
import images from "../../../../../assets/images/importImages";

export default function AddNewMyCourseButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/create-course/flow2-select-course/map-view")}
      className="w-[529px] h-[108px] flex items-center justify-center rounded-[21px] bg-primary-50 border-dashed border-primary-500 mt-[38px]"
    >
      <img src={images.plus_icon} alt="plus-icon" />
    </button>
  );
}
