import arrowIcon from "../../assets/images/uparrow_icon.svg";
import positionIcon from "../../assets/images/position_icon.svg";
import { useChannelStore } from "../../stores/channelStore";
import { useState } from "react";

export default function Menu() {
  // Zustand store hooks
  const isMenuClicked = useChannelStore((state) => state.isMenuClicked);
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);
  const locationList = useChannelStore((state) => state.locationList);
  const spotList = useChannelStore((state) => state.spotList);
  const toggleMenu = useChannelStore((state) => state.toggleMenu);
  const setLocation = useChannelStore((state) => state.setLocation);
  const setSpot = useChannelStore((state) => state.setSpot);
  const setLocationList = useChannelStore((state) => state.setLocationList);
  const setSpotList = useChannelStore((state) => state.setSpotList);
  const setChannelList = useChannelStore((state) => state.setChannelList);

  const [loading, setLoading] = useState(false);

  const menuClicked = async (menu: "location" | "spot") => {
    if (menu === "location" && !isMenuClicked.location) {
      setLoading(true);
      try {
        const channels = await fetchChannelList();
        setLocationList(channels);
        toggleMenu(menu);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else if (menu === "spot" && !isMenuClicked.spot) {
      setLoading(true);
      try {
        const channels = await fetchChannelList();
        setSpotList(channels);
        toggleMenu(menu);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      toggleMenu(menu);
    }
  };

  const formClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const fetchChannelList = async () => {
    try {
      const response = await fetch("/channels");
      if (!response.ok) {
        throw new Error("Error: Unable to fetch data");
      }
      const data = await response.json();
      setChannelList(data);
      return data;
    } catch (error) {
      console.error(error);
      alert("Failed to fetch channels. Please try again.");
    }
  };

  return (
    <section className="menubox flex w-[509px] h-[47px] bg-white rounded-[30px] mt-[32px] z-20 font-pretendard text-[#3B89E2] justify-center items-center z-100 shadow-default relative">
      {/* Location Menu */}
      <div
        className="w-[200px] h-[24px] flex justify-between"
        role="menuItem"
        onClick={() => menuClicked("location")}
      >
        <img src={positionIcon} alt="position icon" />
        <p>{location}</p>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className={`w-[10px] h-[24px] transform transition-transform duration-300 ${
            isMenuClicked.location ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Spot Menu */}
      <div
        className="w-[200px] h-[24px] flex justify-between"
        role="menuItem"
        onClick={() => menuClicked("spot")}
      >
        <p className="ml-[100px]">{spot}</p>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className={`w-[10px] h-[24px] transform transition-transform duration-300 ${
            isMenuClicked.spot ? "rotate-180" : ""
          }`}
        />
      </div>

      {isMenuClicked.location && (
        <form
          action="submit"
          onSubmit={(e) => formClick(e)}
          className="w-[509px] bg-[rgba(255,255,255,0.86)] border-white border-2 -z-10 rounded-[20px] absolute top-[5px] left-0 justify-items-end pt-[63px] pb-[30px] px-[79px] flex flex-wrap gap-2"
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            locationList.map((channel) => (
              <button
                key={channel._id}
                className="form--button"
                onClick={() => setLocation(channel.name)}
              >
                {channel.name}
              </button>
            ))
          )}
        </form>
      )}

      {isMenuClicked.spot && (
        <form
          action="submit"
          onSubmit={(e) => formClick(e)}
          className="w-[509px] bg-[rgba(255,255,255,0.86)] border-white border-2 -z-10 rounded-[20px] absolute top-[5px] left-0 justify-items-end pt-[63px] pb-[30px] px-[79px] flex flex-wrap gap-2"
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <button className="form--button" onClick={() => setSpot("전체")}>
                전체
              </button>
              {spotList.map((channel) => (
                <button
                  key={channel._id}
                  className="form--button"
                  onClick={() => setSpot(channel.name)}
                >
                  {channel.name}
                </button>
              ))}
            </>
          )}
        </form>
      )}
    </section>
  );
}
