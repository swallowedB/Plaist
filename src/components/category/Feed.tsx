import positionIcon from "../../assets/images/position_icon.svg";
import feedImage from "../../assets/images/feedImage.svg";
import likeIcon from "../../assets/images/like_icon.svg";
import { useChannelStore } from "../../stores/channelStore";

export default function Feed() {
  const location = useChannelStore((state) => state.location);
  const spot = useChannelStore((state) => state.spot);

  return (
    <section className="grid grid-cols-2 gap-5 w-full h-full auto-rows-[258px]">
      <article className="feed">
        <img src={feedImage} alt="post header image" />
        <div className="feed--header">
          모이커피 클래식
          <p className="feed--header__like">
            <img src={likeIcon} alt="like icon" />
            4.1k
          </p>
        </div>
        <div className="feed--location">
          <img
            src={positionIcon}
            alt="position icon"
            className="fill-current text-[#7d848d]"
          />
          <p>서울, 강남</p>
        </div>
      </article>
    </section>
  );
}
