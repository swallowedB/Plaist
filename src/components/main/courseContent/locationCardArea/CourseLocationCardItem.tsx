import images from "../../../../assets/images/importImages";
import { useConvertIcon } from "../../../../utills/main/convertIcon";
import { formatLocationCategory, trimStringWithEllipsis } from "../../../../utills/main/fomatter";

export default function CourseLocationCardItem({
  locationName,
  locationAddress,
  locationPhoneNum,
  locationCategory,
}: LocationObj) {
  return (
    <div className="flex items-center">
      <div className="h-[74px] w-[74px] bg-primary-600 rounded-full flex px-[21px] shadow-default">
        <img
          src={useConvertIcon(locationCategory)}
          alt={`location_cafe_icon`}
        />
      </div>
      <div className="h-[3px] w-[14px] bg-primary-700"></div>
      <div className="w-[347px] max-h-[104px] bg-white rounded-3xl shadow-default flex items-center px-[20px] py-[15px]">
        {/* 텍스트 정보 */}
        <div className="flex flex-col gap-2">
          {/* 제목과 카테고리 */}
          <div className="flex items-center gap-[6px]">
            <div className={`flex items-end gap-[6px] leading-6`}>
              <p className="text-[18px] font-medium text-custom-black font-pretendard ">
                {trimStringWithEllipsis(locationName, 16)}
              </p>
              <p
                className={`text-custom-gray text-[13px] font-medium leading-5`}
              >
                {formatLocationCategory(locationCategory)}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[2px] ">
            {/* 연락처와 주소 */}
            {locationPhoneNum && (
              <div className="flex items-center">
                <img
                  src={images.course_phone_num_icon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-xs font-pretendard text-primary-800">
                  {locationPhoneNum}
                </p>
              </div>
            )}
            {locationAddress && (
              <div className="flex items-center">
                <img
                  src={images.location_icon}
                  alt="Location Icon"
                  className="w-4 h-4 mr-1"
                />
                <p className="text-xs font-pretendard text-custom-gray font-regular">
                  {locationAddress}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
