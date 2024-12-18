import img from "../../../assets/images/tryImg.png";
import images from "../../../assets/images/importImages";

type TestData = {
  id: number | string;
  title: string;
  likes: number;
  location: string;
};

type MypageCardItemProps = {
  data: TestData;
};

export default function MypageCardItem({ data }: MypageCardItemProps) {
  return (
    <div className="mt-3">
      <div
        className={`
        w-[177px] h-[194px] rounded-2xl bg-white shadow-blue
        relative flex flex-col items-center p-2
        `}
      >
        <div className="absolute top-[-2px] right-[8px]">
          {/* 좋아요 버튼 */}
          <div
            className={`
            absolute flex items-center justify-center 
            bg-custom-black/20 rounded-full top-[18px] right-[8.71px] 
            h-7 w-7 cursor-pointer`}
          >
            <img
              src={images.like_icon}
              alt="Like Icon"
              className="h-[13px] w-[14px]"
            />
          </div>
        </div>

        {/* 썸네일 이미지 */}
        <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[158px] h-[125px] "
        />

        {/* card texts */}

        {/* 제목 및 좋아요 수 */}
        <div className="flex flex-row items-center justify-between gap-[10px] mt-[9px] w-[154px]">
          <p className="font-pretendard text-[14px] font-regular text-custom-black">
            {data.title}
          </p>
          {/* 좋아요 수 */}
          <div className="flex flex-row items-center">
            <img src={images.like_filled_icon} alt="좋아요 아이콘" />
            <p className="ml-[2px] font-pretendard text-[13px] font-regular text-custom-black">
              {data.likes}
            </p>
          </div>
        </div>

        {/* 위치 */}
        <div className="flex flex-row items-center mt-[3px] w-[154px] ">
          {/* 주소 아이콘 */}
          <img
            src={images.location_icon}
            alt="Location Icon"
            className="w-4 h-4 mr-1"
          />
          <p className="font-pretendard text-[12px] text-custom-gray font-regular">
            {data.location}
          </p>
        </div>
      </div>
    </div>
  );
}
