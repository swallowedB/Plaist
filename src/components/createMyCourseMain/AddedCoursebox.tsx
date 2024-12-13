import { useState } from "react";
import images from "../../assets/images/importImages";

export default function AddedCoursebox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="box-unit font-pretendard bg-transparent pb-[9px]">
      <p className="text-[18px] text-primary-600 font-semiBold leading-[28px] mb-[5px]">
        첫번째 코스
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
          />
        </div>

        <div className="flex justify-start items-center w-[302px]">
          <div>
            <h2 className="font-semiBold">명랑핫도그 이태원 1호점</h2>
            <p className="font-regular">서울 용산구 이태원동 용산구...</p>
          </div>
        </div>

        <div className="flex items-center justify-center w-[113px] font-regular">
          <p>음식점</p>
        </div>
      </div>
    </div>
  );
}
