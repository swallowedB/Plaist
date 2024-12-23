import { useEffect, useMemo, useState } from "react";

import MypageCards from "./MypageCards/MypageCards";

import SearchBar from "../utills/SearchBar";
import defaultImg from "../../assets/images/default.png";
import { useLikesStore } from "../../stores/useLikesStore";

export default function MyLike() {
  const { likes, fetchLikes, posts, fetchPostById } = useLikesStore();
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<CardData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      fetchLikes();
      setIsFetched(true);
    }
  }, [isFetched, fetchLikes]);

  useEffect(() => {
    likes.forEach((like) => {
      fetchPostById(like.post);
    });
  }, [likes, fetchPostById]);

  const likeCardData = useMemo<CardData[]>(() => {
    return likes

      .map((like) => {
        const getFirstTwoWords = (input: string) =>
          input.split(" ").slice(0, 2).join(" ");
        const post = posts[like.post];
        if (post) {
          return {
            id: like.post,
            courseTitle: post.courseTitle || "제목없음",
            courseDescription: post.title?.courseDescription || " ",
            locationAddress:
              getFirstTwoWords(
                post.title?.locationObjs?.[0]?.locationAddress
              ) || "위치 정보 없음",
            likes: post.likes || 0,
            image: post.image || { defaultImg }, // to-do 기본 이미지 추가
          };
        }
        return null;
      })
      .filter((data): data is CardData => data !== null);
  }, [likes, posts]);

  const handleSearch = (result: CardData[]) => {
    setIsSearching(result.length > 0 || result.length === 0);
    setFilteredData(result);
  };

  return (
    <div className={`flex flex-col items-center`}>
      {/* 검색바 */}
      <SearchBar
        data={likeCardData}
        searchKey={["courseTitle", "courseDescription", "locationAddress"]}
        onSearch={handleSearch}
        placeholder="나의 취향을 찾아보세요 (oﾟvﾟ)ノ"
      />

      {/* 필터링된 데이터 렌더링 */}
      <div className="flex flex-col mt-8">
        {isSearching ? (
          filteredData.length > 0 ? (
            <MypageCards data={filteredData} />
          ) : (
            <div className="col-span-3 mt-10 text-sm font-medium text-center text-primary-700 font-pretendard">
              좋아요를 누른 게시물이 없어요 இ௰இ
            </div>
          )
        ) : likeCardData.length > 0 ? (
          <MypageCards data={likeCardData} />
        ) : (
          <div className="col-span-3 mt-10 text-sm font-medium text-center text-primary-700 font-pretendard">
            좋아요를 누른 게시물이 없어요 இ௰இ
          </div>
        )}
      </div>
    </div>
  );
}
