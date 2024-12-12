import images from "../../assets/images/importImages";

export default function CreateNewMy() {
  return (
    <>
      <div className="w-[529px] h-[108px] flex items-center justify-center rounded-[21px] bg-primary-50 border-dashed border-primary-500">
        <img src={images.plus_icon} alt="plus-icon" />
      </div>
    </>
  );
}
