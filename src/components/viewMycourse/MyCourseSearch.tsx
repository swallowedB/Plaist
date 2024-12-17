import searchIcon from "../../assets/images/search_icon.svg";
import { useState } from "react";

export default function MyCourseSearch({
  setSearch,
  onSearch,
}: {
  setSearch: (search: string) => void;
  onSearch: () => void;
}) {
  const [searchInput, setSearchInput] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      action="submit"
      onSubmit={(e) => formSubmit(e)}
      className="z-10 text-center relative mb-[42px]"
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
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchInput(newValue);
            setSearch(newValue);
          }}
          className="w-full h-[47px] rounded-[30px] px-[26px] font-pretendard text-[#2E2E2E] shadow-blue"
        />
        <button>
          <img
            src={searchIcon}
            alt="search Icon"
            className="absolute top-1/2 right-[20px] transform -translate-y-1/2"
          />
        </button>
      </section>
    </form>
  );
}
