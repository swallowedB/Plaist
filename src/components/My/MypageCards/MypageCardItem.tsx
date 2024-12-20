import { Link } from "react-router";
import images from "../../../assets/images/importImages";

type CardData = {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationAddress: string;
  likes: number;
  image: string;
};

type MypageCardItemProps = {
  data: CardData;
};

export default function MypageCardItem({ data }: MypageCardItemProps) {
  
  return (
    <Link to={`/course-content/${data.id}`}>
      <div
        className="mt-3 hover:scale-105 
    duration-[0.2s] ease-in-out"
      >
        <div
          className={`
          w-[177px] h-[194px] rounded-2xl bg-white shadow-blue
          relative flex flex-col items-center p-2
          `}
        >
          <div className="absolute top-[-2px] right-[8px]"></div>

          {/* 썸네일 이미지 */}
          <img
            src={data.image}
            alt={data.courseTitle}
            className="w-[158px] h-[125px] object-cover object-center rounded-[10px]"
          />

          {/* card texts */}
          {/* 제목 */}
          <div className="flex flex-row items-center justify-between gap-[10px] mt-[9px] w-[154px]">
            <p className="font-pretendard text-[14px] font-regular text-custom-black truncate">
              {data.courseTitle.length > 9
                ? `${data.courseTitle.slice(0, 9)}...`
                : data.courseTitle}
            </p>
            {/* 좋아요 수 */}
            <div className="flex flex-row items-center">
              <img
                src={images.like_filled_icon}
                alt="좋아요 아이콘"
                className="pb-[1px]"
              />
              <p className="ml-[3px] font-pretendard text-[12px] font-regular text-custom-black pt-[1px]">
                {data.likes}
              </p>
            </div>
          </div>

          {/* 위치 */}
          <div className="flex flex-row items-center mt-[3px] w-[154px] mr-[3px] ">
            {/* 주소 아이콘 */}
            <img
              src={images.location_icon}
              alt="Location Icon"
              className="w-4 h-4 mr-[1px] mt-[1px]"
            />
            <p className="font-pretendard text-[12px] text-custom-gray font-regular">
              {data.locationAddress.length > 13
                ? `${data.locationAddress.slice(0, 13)}...`
                : data.locationAddress || "위치 정보 없음"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
