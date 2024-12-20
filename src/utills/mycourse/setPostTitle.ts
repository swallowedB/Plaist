import { toast } from "react-toastify";
import { findValueByKeyInString } from "./findValueByKeyInSpot";

export const getChannelIdList = (locationObjs: LocationObj[]) => {
  const addressToChannelMap: ChannelList = {
    서울: "675bef7e09a5266ae560fdd2",
    경기: "675bef8b09a5266ae560fdd6",
    인천: "675befd809a5266ae560fddd",
    강원: "675befdf09a5266ae560fde1",
    충남: "675befe909a5266ae560fde5",
    대전: "675befee09a5266ae560fde9",
    충북: "675beffa09a5266ae560fded",
    세종: "675bf00109a5266ae560fdf1",
    부산: "675bf00709a5266ae560fdf5",
    울산: "675bf00b09a5266ae560fdf9",
    대구: "675bf01109a5266ae560fdfd",
    경북: "675bf01709a5266ae560fe01",
    경남: "675bf01a09a5266ae560fe05",
    전남: "675bf02109a5266ae560fe09",
    광주: "675bf02b09a5266ae560fe0d",
    전북: "675bf03009a5266ae560fe13",
    제주: "675bf03409a5266ae560fe17",
  };

  const spotToChannelMap: ChannelList = {
    음식점: "676169231c8bf50ad13bee81",
    문화시설: "676169291c8bf50ad13bee95",
    숙박: "6761692f1c8bf50ad13beea3",
    카페: "676169341c8bf50ad13beeb1",
    주차장: "6761693e1c8bf50ad13beede",
    편의점: "67640eac49fcc75c41c89066",
    관광: "675bf44b09a5266ae560fe37",
  };

  const addressList = locationObjs.map((location) => location.locationAddress);
  const spotList = locationObjs.map((location) => location.locationCategory);

  const selectedAddressChannels = addressList.map((address) => {
    if (!address || address.length < 2)
      return toast.error("유효하지 않은 지역 카테고리입니다.");
    return (
      addressToChannelMap[address.slice(0, 2)] ||
      toast.error("유효하지 않은 입력 형식입니다.")
    );
  });

  const selectedSpotChannels = spotList.map((spot) => {
    if (!spot) return toast.error("장소 형식이 입력되지 않았습니다.");
    const filteredSpotChannelId = findValueByKeyInString(
      spot,
      spotToChannelMap
    );
    return filteredSpotChannelId && filteredSpotChannelId;
  });

  const targetChannelList = [
    ...selectedAddressChannels,
    ...selectedSpotChannels,
  ];

  return targetChannelList;
};
