export const getChannelIdList = (locationObjs: LocationObjs) => {
  const addressToChannelMap: { [key: string]: string } = {
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

  const addressList = locationObjs.map((location) => location.locationAddress);

  const channelList = addressList.map((address) => {
    if (!address || address.length < 2) return "unknown_channel";
    return addressToChannelMap[address.slice(0, 2)] || "unknown_channel";
  });
  return channelList;
};
