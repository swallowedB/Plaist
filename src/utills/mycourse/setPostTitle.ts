export const getChannelIdList = (locationObjs: LocationObj[]) => {
  // locationObjs에서 locationAddress만 골라서 새로운 배열을 만듦
  const addressList = locationObjs.map((location) => location.locationAddress);
  const channelList = addressList.map((address) => {
    switch (address.slice(0, 2)) {
      case "서울":
        return "675bef7e09a5266ae560fdd2";
      case "경기":
        return "675bef8b09a5266ae560fdd6";
      case "인천":
        return "675befd809a5266ae560fddd";
      case "강원":
        return "675befdf09a5266ae560fde1";
      case "충남":
        return "675befe909a5266ae560fde5";
      case "대전":
        return "675befee09a5266ae560fde9";
      case "충북":
        return "675beffa09a5266ae560fded";
      case "세종":
        return "675bf00109a5266ae560fdf1";
      case "부산":
        return "675bf00709a5266ae560fdf5";
      case "울산":
        return "675bf00b09a5266ae560fdf9";
      case "대구":
        return "675bf01109a5266ae560fdfd";
      case "경북":
        return "675bf01709a5266ae560fe01";
      case "경남":
        return "675bf01a09a5266ae560fe05";
      case "전남":
        return "675bf02109a5266ae560fe09";
      case "광주":
        return "675bf02b09a5266ae560fe0d";
      case "전북":
        return "675bf03009a5266ae560fe13";
      case "제주":
        return "675bf03409a5266ae560fe17";
      default:
        return "";
    }
  });
  return channelList;
};


