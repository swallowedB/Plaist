import likeIcon from "../../assets/images/like_icon.svg";
import feedImage from "../../assets/images/feedImage.svg";
import positionIcon from "../../assets/images/position_grey_icon.svg";
import { useChannelStore } from "../../stores/channelStore";

export default function Feed() {
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);

  return (
    <section className="grid grid-cols-2 gap-5 w-full h-full auto-rows-[258px]">
      <article className="rounded-2xl p-[11px] bg-white shadow-md">
        <img
          src={feedImage}
          alt="post header image"
          className="w-full h-auto rounded-lg"
        />
        <div className="flex justify-between items-center font-medium text-[14px] leading-6 mt-[7px] mx-5">
          <span>모이커피 클래식</span>
          <p className="flex items-center gap-[2.42px] text-sm font-light">
            <img src={likeIcon} alt="like icon" className="w-[16px] h-[16px]" />
            4.1k
          </p>
        </div>
        <div className="flex items-center text-sm font-light text-[#7d848d] leading-6 ml-5">
          <img
            src={positionIcon}
            alt="position icon"
            className="w-[16px] h-[16px] mr-[4px]"
          />
          <p>서울, 강남</p>
        </div>
      </article>
    </section>
  );
}
