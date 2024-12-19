import MypageUserInfo from "../MypageUserInfo";

export default function UserInfo() {
  return (
    <div>
      <div className="relative w-[767px] flex flex-col items-center min-h-[1000px] mb-[200px] mx-auto z-10">
        {/* blur blue*/}
        <div className="absolute blur-bg-center" />

        {/*glass 창 */}
        <MypageUserInfo />
      </div>
    </div>
  );
}
