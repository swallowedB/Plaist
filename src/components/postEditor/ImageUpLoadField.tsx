import images from "./../../assets/images/importImages";

export default function ImageUpLoadField({
  imagePreview,
  handleImageUpload,
  originImagePreview,
}: ImageUploadFieldProps) {
  return (
    <div
      className=" w-[136px] h-[136px] bg-primary-50 rounded-lg flex items-center justify-center border bg-center bg-cover cursor-pointer"
      onClick={handleImageUpload}
    >
      {imagePreview ? (
        <img
          src={imagePreview}
          alt="업로드된 이미지 미리보기"
          className="object-cover w-full h-full rounded-lg"
        />
      ) : (
        <img
          src={originImagePreview || images.plus_icon} // File 객체가 없으면 기본 아이콘 사용
          alt="플러스 아이콘"
          className="w-4 h-4"
        />
      )}
    </div>
  );
}
