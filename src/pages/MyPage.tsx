import "../css/index.css";
import MypageContents from "../components/My/MypageContents";

export default function MyPage() {
  return (
    <>
      <div className="relative flex flex-col items-center min-h-[1000px] mx-auto mb-[200px]">
        {/* blur blue*/}
        <div className="absolute blur-bg-center z-[-10]" />

        {/*glass 창 */}
        <MypageContents />
      </div>
    </>
  );
}
