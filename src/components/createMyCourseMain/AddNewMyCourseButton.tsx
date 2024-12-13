import images from "../../assets/images/importImages";

export default function AddNewMyCourseButton() {
  return (
    <div className="w-[529px] h-[108px] flex items-center justify-center rounded-[21px] bg-primary-50 border-dashed border-primary-500 mt-[34px]">
      <img src={images.plus_icon} alt="plus-icon" />
    </div>
  );
}
