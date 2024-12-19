import arrowIcon from "../../assets/images/uparrow_icon.svg";
import positionIcon from "../../assets/images/position_icon.svg";
import { useChannelStore } from "../../stores/channelStore";
import { getChannelList } from "../../api/channelApi";
import { useState, useEffect } from "react";

export default function Menu() {
  // local state
  const [isMenuClicked, setIsMenuClicked] = useState({
    location: false,
    spot: false,
  });

  // global state
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);
  const channelList = useChannelStore((state) => state.channelList);
  const setChannelList = useChannelStore((state) => state.setChannelList);

  const setLocation = useChannelStore((state) => state.setLocation);
  const setSpot = useChannelStore((state) => state.setSpot);

  const fetchChannelList = async () => {
    try {
      const channels = await getChannelList();
      setChannelList(channels);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = (menu: "location" | "spot") => {
    setIsMenuClicked((state) => ({
      location: menu === "location" ? !state.location : false,
      spot: menu === "spot" ? !state.spot : false,
    }));
    console.log("toggleMenu");
  };

  const menuClicked = async (menu: "location" | "spot") => {
    try {
      // fetchChannelList();
      toggleMenu(menu);
      console.log("menuClicked");
    } catch (error) {
      console.log(error);
    }
  };

  const onMenuButtonClick = (
    type: "지역" | "스팟",
    channelId: string,
    channelName: string
  ) => {
    setIsMenuClicked({
      location: false,
      spot: false,
    });
    if (type === "지역" && location.name !== channelName)
      setLocation(channelId, channelName);
    else if (type === "스팟" && location.name !== channelName)
      setSpot(channelId, channelName);
  };

  useEffect(() => {
    // 피드 실행 전 먼저 실행되도록
    const initializeState = async () => {
      try {
        await fetchChannelList();
      } catch (error) {
        console.error(error);
      }
    };
    initializeState();
  }, []);

  return (
    <section className="menubox flex w-[509px] h-[47px] bg-white rounded-[30px] mt-[32px] z-20 font-pretendard text-[#3B89E2] justify-center items-center z-100 shadow-blue relative px-[28px] font-semiBold">
      {/* Location Menu */}
      <div
        className="h-[24px] flex"
        role="menuItem"
        onClick={() => menuClicked("location")}
      >
        <img src={positionIcon} alt="position icon" className="mr-[69px]" />
        <p className="mr-[75px]">{location.name}</p>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className={`w-[10px] h-[24px] transform transition-transform duration-300 mx-[12px] ${
            isMenuClicked.location ? "" : "rotate-180"
          }`}
        />
      </div>

      {/* Spot Menu */}
      <div
        className="w-[222px] h-[24px] flex items-center relative"
        role="menuItem"
        onClick={() => menuClicked("spot")}
      >
        {/* 가운데 정렬 */}
        <p className="absolute left-1/2 transform -translate-x-1/2">
          {spot.name}
        </p>

        {/* 오른쪽 끝 정렬 */}
        <img
          src={arrowIcon}
          alt="arrow icon"
          className={`w-[10px] h-[24px] absolute right-0 transform transition-transform duration-300 ${
            isMenuClicked.spot ? "" : "rotate-180"
          }`}
        />
      </div>

      {isMenuClicked.location && (
        <ul className="list-none p-0 m-0 w-[509px] bg-[rgba(255,255,255,0.86)] border-white border-2 -z-10 rounded-[20px] absolute top-[5px] left-0 justify-items-end pt-[63px] pb-[30px] px-[70px] flex flex-wrap gap-2">
          <li
            className={`menu--button ${
              location.name === "전국"
                ? "bg-[#306EB5] text-white"
                : "bg-white/70 text-primary-600"
            }`}
            onClick={() => onMenuButtonClick("지역", "전국", "전국")}
          >
            전국
          </li>
          {channelList.location.map((channel) => (
            <li
              key={channel._id}
              className={`menu--button ${
                location.name === channel.name
                  ? "bg-[#306EB5] text-white"
                  : "bg-white/70 text-primary-600"
              }`}
              onClick={() =>
                onMenuButtonClick("지역", channel._id, channel.name)
              }
            >
              {channel.name}
            </li>
          ))}
        </ul>
      )}

      {isMenuClicked.spot && (
        <ul className="list-none p-0 m-0 w-[509px] bg-[rgba(255,255,255,0.86)] border-white border-2 -z-10 rounded-[20px] absolute top-[5px] left-0 justify-items-end pt-[63px] pb-[30px] px-[79px] flex flex-wrap gap-2">
          <li
            className={`menu--button ${
              spot.name === "전체"
                ? "bg-[#306EB5] text-white"
                : "bg-white/70 text-primary-600"
            }`}
            onClick={() => onMenuButtonClick("스팟", "전체", "전체")}
          >
            전체
          </li>
          {channelList.spot.map((channel) => (
            <li
              key={channel._id}
              className={`menu--button ${
                spot.name === channel.name
                  ? "bg-[#306EB5] text-white"
                  : "bg-white/70 text-primary-600"
              }`}
              onClick={() =>
                onMenuButtonClick("스팟", channel._id, channel.name)
              }
            >
              {channel.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
