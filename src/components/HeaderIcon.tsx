import playlist_icon from "../assets/images/playlist-logo.svg";
import notification_icon from "../assets/images/notification-icon.svg";
import hamburger_icon from "../assets/images/hamburger-icon.svg";

export default function HeaderIcon() {
  return (
    <header className="relative w-full h-16 flex items-center px-4">
      <a href="/">
        <img
          src={playlist_icon}
          alt="Playlist"
          width="46"
          height="19"
          className="h-full w-full object-contain"
        />
      </a>
      <div className="ml-auto flex gap-[17px]">
        <a href="/notification">
          <img
            src={notification_icon}
            alt="notification"
            width="17"
            height="20"
            className="h-full w-full object-contain"
          />
        </a>
        <a href="/">
          <img
            src={hamburger_icon}
            alt="hamburger"
            width="24"
            height="24"
            className="h-full w-full object-contain"
          />
        </a>
      </div>
    </header>
  );
}
