import { useState } from "react";
import images from "../assets/images/importImages"; // 이미지 import
// querystring 공부해서 구현해보기
// DropDown 이름 SearchDropDowm으로 변경

export function SearchDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <button
        id="dropdown-button"
        className="w-[156px] z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-primary-700 bg-white rounded-s-lg "
        type="button"
        onClick={toggleDropdown}
      >
        전체
        <img
          src={
            isDropdownOpen ? images.dropdown_icon_down : images.dropdown_icon_up
          }
          alt="Dropdown Icon"
          aria-hidden="true"
        />
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="w-[156px] z-10 bg-white rounded-lg shadow w-44"
        >
          <ul
            className="py-2 text-sm text-custom-black"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2">
                음식점
              </button>
            </li>

            <li>
              <button type="button" className="inline-flex w-full px-4 py-2">
                카페
              </button>
            </li>
            <li>
              <button type="button" className="inline-flex w-full px-4 py-2">
                문화시설
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export function SearchBar() {
  return (
    <div>
      <input
        type="search"
        id="search-dropdown"
        className="text-gray-900 w-[324px]"
        placeholder="키워드, 주소, 상호명을 검색하세요"
        required
      />
    </div>
  );
}

export function SearchButton() {
  return (
    <button type="submit">
      {/* 이미지 아이콘 */}
      <img src={images.search_icon} alt="Search Icon" aria-hidden="true" />
    </button>
  );
}

export default function SearchForm() {
  return (
    <form>
      <div className="flex items-center w-[545px] h-[47px] bg-white block rounded-3xl shadow-default">
        <SearchBar />
        <SearchButton />
      </div>
    </form>
  );
}
