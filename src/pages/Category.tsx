import Menu from "../components/category/Menu";
import Feed from "../components/category/Feed";

export default function Category() {
  return (
    <section className="blurTop grid place-items-center bg-white">
      <header className="text-white grid place-items-center mt-[103px] z-10">
        <p className="font-pretendard font-regular text-[21px] leading-[21px] block">
          Your Shortcut to Great Days
        </p>
        <p className="font-rubik font-normal text-6xl leading-[80px] block">
          Plaist
        </p>
      </header>
      <Menu />
      <section className="category--glassbox mt-[32px] px-[30px] py-[30px] overflow-hidden relative">
        {/* 임시 포스트 */}
        <Feed />
      </section>
    </section>
  );
}
