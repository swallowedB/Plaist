import HeaderIconLink from "../HeaderNavLink";

export default function HeaderIcon() {
  return (

    // 상단바 블러 backdrop-blur-sm
    <header className="w-full h-16 fixed top-0 left-0 z-50 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <nav className="relative flex items-center justify-between max-w-3xl px-4 w-full h-full">
          <HeaderIconLink
            to="/"
            icon="playlist_logo"
            className="w-[100px] md:pl-[30px]"
          />
          <div className="flex items-center gap-4 md:pr-[61px]">

            <HeaderIconLink
              to="/notification"
              icon="notification_icon"
              className="w-[17px] h-[20px]"
            />
            <HeaderIconLink
              to="/"
              icon="hamburger_icon"
              className="w-[24px] h-[24px]"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
