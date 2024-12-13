import { useState } from "react";
import images from "../../assets/images/importImages";

interface AddedCourseboxProps {
  id: number;
  title: string;
  address: string;
  category: string;
  onDelete: (id: number) => void; // 삭제 콜백 함수
}

export default function AddedCoursebox({
  id,
  title,
  address,
  category,
  onDelete,
}: AddedCourseboxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="box-unit font-pretendard bg-transparent pb-[9px]">
      <p className="text-[18px] text-primary-600 font-semiBold leading-[28px] mb-[5px]">
        {title}
      </p>
      <div
        id="selected-course-box"
        className={`w-[529px] h-[108px] flex justify-items-center rounded-[21px] border-dashed border-primary-500 text-white ${
          isHovered ? "bg-primary-300" : "bg-primary-500"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center w-[114px]">
          <img
            src={
              isHovered
                ? images.course_delete_icon
                : images.course_selected_icon
            }
            alt="아이콘"
            onClick={() => onDelete(id)} // 삭제 콜백 호출
            className="cursor-pointer" // 클릭 가능 스타일
          />
        </div>

        <div className="flex justify-start items-center w-[302px]">
          <div>
            <h2 className="font-semiBold">{title}</h2>
            <p className="font-regular">{address}</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-[113px] font-regular">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
}
