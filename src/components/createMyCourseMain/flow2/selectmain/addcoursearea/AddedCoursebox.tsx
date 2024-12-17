import { useState } from "react";
import images from "../../../../../assets/images/importImages";

interface AddedCourseboxProps {
  brand: string;
  index: number;
  address: string;
  category: string;
  onDelete: (id: number) => void; // 삭제 콜백 함수
}

export default function AddedCoursebox({
  brand,
  index,
  address,
  category,
  onDelete,
}: AddedCourseboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  // 코스 제목 결정 로직
  const title =
    index === 0
      ? "첫번째 코스"
      : index === 1
      ? "두번째 코스"
      : index === 2
      ? "세번째 코스"
      : index === 3
      ? "네번째 코스"
      : index === 4
      ? "다섯번째 코스"
      : "기타 코스"; // 기본값 처리

  return (
    <div
      id="box-unit"
      className="font-pretendard bg-transparent w-[529px] h-[150px] pb-[9px]"
    >
      <p className="text-[18px] text-primary-600 font-semiBold leading-[28px] mb-[5px]">
        {title}
      </p>
      <div
        className={`w-[529px] h-[108px] flex justify-items-center rounded-[21px] border-dashed border-primary-500 text-white ${
          isHovered ? "bg-primary-300" : "bg-primary-500"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 삭제 아이콘 */}
        <div className="flex items-center justify-center w-[114px]">
          <img
            src={
              isHovered
                ? images.course_delete_icon
                : images.course_selected_icon
            }
            alt="아이콘"
            onClick={() => onDelete(index)}
            className="cursor-pointer"
          />
        </div>

        {/* 주소와 제목 */}
        <div className="flex flex-col justify-center items-start w-[302px]">
          <h2 className="w-[302px] font-semiBold overflow-hidden whitespace-nowrap truncate">
            {brand}
          </h2>
          <p className="w-[302px] font-regular text-overflow: ellipsis">
            {address}
          </p>
        </div>

        {/* 카테고리 */}
        <div className="flex items-center justify-center w-[113px] font-regular">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}
