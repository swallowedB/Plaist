import Menu from "../components/category/Menu";
import Feed from "../components/category/Feed";

export default function Category() {
  return (
    <section className="blurTop grid place-items-center bg-white">
      <header className="text-white grid place-items-center mt-[103px] z-10">
        <h2 className="font-pretendard font-regular text-[21px] leading-[21px]">
          Your Shortcut to Great Days
        </h2>
        <h1 className="font-rubik font-normal text-6xl leading-[80px]">
          Plaist
        </h1>
      </header>
      <Menu />
      <section className="category--glassbox mt-[32px] px-[30px] py-[30px] overflow-hidden relative">
        {/* 임시 포스트 */}
        <Feed />
      </section>
    </section>
  );
}
