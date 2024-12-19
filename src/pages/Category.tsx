import Menu from "../components/category/Menu";
import Feed from "../components/category/Feed";
import "../css/index.css";

export default function Category() {
  return (
    <div className="relative w-[767px] flex flex-col items-center h-screen mx-auto mb-[100px]">
      <div className="absolute blur-bg-center" />
      <section className="absolute grid place-items-center z-30">
        <header className="text-white grid place-items-center mt-[103px] z-10">
          <h2
            style={{ textShadow: "0px 3px 15px rgba(47, 125, 215, 0.30)" }}
            className="font-pretendard font-regular text-[21px] leading-[21px]"
          >
            Your Shortcut to Great Days
          </h2>
          <h1
            style={{ textShadow: "0px 3px 15px rgba(47, 125, 215, 0.30)" }}
            className="font-rubik font-normal text-6xl leading-[80px]"
          >
            Plaist
          </h1>
        </header>
        <Menu />
        <section className="category--glassbox mt-[32px] px-[30px] py-[30px] overflow-hidden relative mb-[150px]">
          {/* 임시 포스트 */}
          <Feed />
        </section>
      </section>
    </div>
  );
}
