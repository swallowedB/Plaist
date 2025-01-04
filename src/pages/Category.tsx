import { useState } from "react";

import "../styles/index.css";
import Menu from "../components/category/Menu";
import Feed from "../components/category/Feed";

type Sort = "최신순" | "인기순";
export default function Category() {
  const [sortFeed, setSortFeed] = useState<Sort>("최신순");

  return (
    <div className="relative w-[767px] flex flex-col items-center h-screen mx-auto mb-[100px]">
      <div className="absolute blur-bg-center" />
      <section className="absolute z-30 grid place-items-center">
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
        <ul
          role="button"
          className="mt-[30px] w-[690px] flex justify-end font-pretendard text-[14px] gap-3 font-regular text-custom-gray"
        >
          <li
            className={`inline ${
              sortFeed === "최신순" ? "text-primary-600" : "text-custom-gray"
            } font-medium`}
            onClick={() => setSortFeed("최신순")}
          >
            최신순
          </li>
          <li
            className={`inline ${
              sortFeed === "인기순" ? "text-primary-600" : "text-custom-gray"
            } font-medium`}
            onClick={() => setSortFeed("인기순")}
          >
            인기순
          </li>
        </ul>
        {/* 임시 포스트 */}
        <Feed sort={sortFeed} />
      </section>
    </div>
  );
}
