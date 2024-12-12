import { useState } from "react";
import images from "../../assets/images/importImages";

export default function CreatedCoursebox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="box-unit font-pretendard ">
        <p className="text-[18px] text-primary-600 font-semiBold leading-[28px] mb-[5px]">
          첫번째 코스
        </p>
        <div
          id="selected-course-box"
          className={`w-[529px] h-[108px] flex justify-items-center rounded-[21px] border-dashed border-primary-500  text-white ${
            isHovered ? "bg-primary-300" : "bg-primary-500"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 첫 번째 div: 콘텐츠와 텍스트 중앙 정렬 */}
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

          {/* 가운데 div: line-height을 높이와 동일하게 설정하고 텍스트 왼쪽 정렬 */}
          <div className="flex justify-start items-center w-[302px]">
            <div>
              <h2 className="font-semiBold">명랑핫도그 이태원 1호점</h2>
              <p className="font-regular">서울 용산구 이태원동 용산구...</p>
            </div>
          </div>

          {/* 마지막 div: 콘텐츠와 텍스트 중앙 정렬 */}
          <div className="flex items-center justify-center w-[113px] font-regular">
            <p>음식점</p>
          </div>
        </div>
      </div>
    </>
  );
}
