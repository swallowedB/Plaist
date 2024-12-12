import Search from "../components/createCourse/Search";
import Feed from "../components/category/Feed";

export default function CreateCourse() {
  return (
    <section className="blurTop grid place-items-center bg-white">
      <header className="text-white grid place-items-center mt-[103px] z-10">
        <h1 className="font-rubik font-normal text-6xl leading-[80px]">
          My Course
        </h1>
      </header>
      <button className="w-[285px] h-[47px] mt-[37px] text-[20px] bg-blue-500 rounded-3xl shadow-blue border-2 border-white/50 text-center text-white font-medium font-pretendard leading-[38px] z-10">
        나만의 코스 만들기
      </button>
      <Search />
      <section className="category--glassbox mt-[42px] px-[30px] py-[30px] overflow-hidden">
        {/* 임시 포스트 */}
        <Feed />
      </section>
    </section>
  );
}
