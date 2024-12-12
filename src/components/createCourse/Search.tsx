import { useCreateCourseStore } from "../../stores/createCourseStore";
import searchIcon from "../../assets/images/search_icon.svg";

export default function Search() {
  const searchInput = useCreateCourseStore((state) => state.searchInput);
  const setSearchInput = useCreateCourseStore((state) => state.setSearchInput);

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      action="submit"
      onSubmit={(e) => formSubmit(e)}
      className="z-10 text-center relative"
    >
      <label
        htmlFor="search"
        className="font-pretendard text-white text-[18px] font-medium mt-[64px] block"
      >
        마이 코스를 검색하세요
      </label>
      <section className="relative mt-[12px] w-[415px] mx-auto">
        <input
          type="text"
          id="search"
          placeholder="무엇을 찾으시나요?"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full h-[47px] rounded-[30px] px-[26px] font-pretendard text-[#2E2E2E] shadow-blue"
        />
        <img
          src={searchIcon}
          alt="search Icon"
          className="absolute top-1/2 right-[20px] transform -translate-y-1/2"
        />
      </section>
    </form>
  );
}
