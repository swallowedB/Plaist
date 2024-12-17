import { useEffect, useState } from "react";
import SearchBar from "../utills/SearchBar";
import MypageCards from "./MypageCards/MypageCards";
import { useLikesStore } from "../../stores/useLikesStore";

type LikeCardData = {
  id: string;
  title: string;
  likes: number;
  location: string;
};

export default function MyLike() {
  const {likes, fetchLikes} = useLikesStore();
  const [filteredData, setFilteredData] = useState<LikeCardData[]>([]);

  useEffect(() =>{
    fetchLikes();
  }, [fetchLikes]);

  const transformedData: LikeCardData[] = likes.map((like) => ({
    id: like.post, 
    title: "Sample Title",
    likes: 0, 
    location: "Sample Location", 
  }));

  useEffect(() => {
    setFilteredData(transformedData);
  }, [transformedData]);


  return (
    <div className={`flex flex-col items-center`}>
      <SearchBar
        data={transformedData}
        searchKey="title"
        onSearch={(filteredData) => setFilteredData(filteredData)}
        placeholder="어떤 것이든 검색해보세요 (oﾟvﾟ)ノ"
      />
      {/* 필터링된 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {filteredData.length > 0 ? (
            <MypageCards data={filteredData} />
          ) : (
            <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
              검색 결과를 찾지 못했어요 ψ(｀∇´)ψ
            </div>
          )}
      </div>
    </div>
  );
}
