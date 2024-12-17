import images from "../../../../../assets/images/importImages";

interface AddNewMyCourseButtonProps {
  onPlus: () => void;
}

export default function AddNewMyCourseButton({
  onPlus,
}: AddNewMyCourseButtonProps) {
  return (
    <button
      onClick={() => onPlus}
      className="w-[529px] h-[108px] flex items-center justify-center rounded-[21px] bg-primary-50 border-dashed border-primary-500 mt-[38px]"
    >
      <img src={images.plus_icon} alt="plus-icon" />
    </button>
  );
}
