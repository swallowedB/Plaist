import "../css/index.css";
import MypageContents from "../components/main/My/MypageContents";

export default function MyPage() {
  return (
    <>
      <div className="relative w-[767px] flex flex-col items-center h-screen mx-auto">
        {/* blur blue*/}
        <div className="absolute blur-bg-center" />

        {/*glass 창 */}
        <MypageContents />
      </div>
    </>
  );
}
