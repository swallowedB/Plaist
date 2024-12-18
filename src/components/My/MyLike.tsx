import { useEffect, useMemo, useState } from "react";
import SearchBar from "../utills/SearchBar";
import MypageCards from "./MypageCards/MypageCards";
import { useLikesStore } from "../../stores/useLikesStore";

type CardData = {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationName: string;
  likes: number;
  image: string;
};

export default function MyLike() {
  const {likes, fetchLikes, posts, fetchPostById } = useLikesStore();
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<CardData[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() =>{
    if(!isFetched) {
      fetchLikes();
      setIsFetched(true);
    }
  }, [isFetched, fetchLikes]);

  useEffect(() => {
    likes.forEach((like) => {
      fetchPostById(like.post);
    });
  }, [likes, fetchPostById])

  const likeCardData = useMemo<CardData[]>(() => {
    return likes
      .map((like) => {
        const post = posts[like.post]; 
        if (post) {
          return { 
            id: like._id,
            courseTitle: post.courseTitle || "제목없음",
            courseDescription: post.title?.courseDescription || " ",
            locationName: post.title?.locationObjs?.[0]?.name || "위치 정보 없음",
            likes: post.likes || 0,
            image: post.image || " ", // to-do 기본 이미지 추가
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
        searchKey="courseTitle"
        onSearch={handleSearch}
        placeholder="나의 취향을 찾아보세요 (oﾟvﾟ)ノ"
      />

      {/* 필터링된 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {isSearching ? (
            filteredData.length > 0 ? (
              <MypageCards data={filteredData} />
            ) : (
              <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
                검색 결과를 찾지 못했어요 ψ(｀∇´)ψ
              </div>
            )
          ) : likeCardData.length > 0 ? (
            <MypageCards data={likeCardData} />
          ) : (
            <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
              좋아요를 누른 게시물이 없어요 இ௰இ
            </div>
          )}
      </div>
    </div>
  );
}
