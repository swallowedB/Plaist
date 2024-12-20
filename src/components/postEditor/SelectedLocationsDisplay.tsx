import { useConvertIcon } from "./../../utills/main/convertIcon";

export default function SelectedLocationsDisplay({
  locationObjs,
}: {
  locationObjs: LocationObj[];
}) {
  return (
    <div className="mt-10">
      <h3 className="mb-4 text-base font-semibold text-custom-black font-pretendard">
        선택한 코스
      </h3>
      <div className="relative flex items-center justify-center gap-[56px]">
        {locationObjs.map((location, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="w-[120px] h-[120px] bg-primary-200 rounded-full flex items-center justify-center">
              <div
                className="w-[74px] h-[74px]"
                style={{
                  backgroundImage: `url(${useConvertIcon(
                    location.locationCategory
                  )})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <span className="mt-2 text-sm font-semibold text-center font-pretendard text-primary-600">
              {location.locationName}
            </span>
          </div>
        ))}
        {/* 가로줄 추가 */}
        <div
          className="absolute top-[60px] border-t-2 border-dashed border-primary-600 z-[-1]"
          style={{
            width: `${
              120 * locationObjs.length + 56 * (locationObjs.length - 1)
            }px`,
            left: `calc(50% - ${
              (120 * locationObjs.length) / 2 +
              (56 * (locationObjs.length - 1)) / 2
            }px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
