import { useState } from "react";
import images from "../assets/images/importImages"; // 이미지 import

export default function SearchBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <form className="max-w-lg mx-auto">
      <div className="flex">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          키워드, 주소, 상호명
        </label>

        <div className="relative">
          <button
            id="dropdown-button"
            type="button"
            onClick={toggleDropdown}
            className="w-20 h-5 relative"
          >
            전체
            <img
              src={
                isDropdownOpen
                  ? images.dropdown_icon_down
                  : images.dropdown_icon_up
              }
              alt="Dropdown Icon"
              aria-hidden="true"
            />
          </button>

          <div
            id="dropdown"
            className={`z-10 ${
              isDropdownOpen ? "block" : "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  전체
                </button>
              </li>
              {/* 기타 옵션들... */}
            </ul>
          </div>
        </div>

        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-700 dark:text-white dark:focus:border-blue-500"
            placeholder="키워드, 주소, 상호명을 입력해주세요"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-44"
          >
            {/* 이미지 아이콘 */}
            <img
              src={images.search_icon}
              alt="Search Icon"
              aria-hidden="true"
            />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
