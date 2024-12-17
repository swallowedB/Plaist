import { useEffect, useState } from "react";
import SearchBar from "../utills/SearchBar";
import MyCommentCards from "./MyComment/MyCommentCards";
import { useCommentsStore } from "../../stores/useCommentsStore";

export default function MyComment() {
  const { comments, fetchComments } = useCommentsStore();
  const [filteredData, setFilteredData] = useState<string[]>([]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    setFilteredData(comments);
  }, [comments]);

  const handleSearch = (result: string[]) => {
    setFilteredData(result);
  };

  return (
    <div className={`flex flex-col items-center`}>
      <SearchBar
        data={comments}
        searchKey="title"
        onSearch={handleSearch}
        placeholder="내가 남긴 흔적 찾아보기 (oﾟvﾟ)ノ"
      />
      {/* 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {filteredData.length > 0 ? (
          <MyCommentCards data={filteredData} onDelete={deleteComment} />
        ) : (
          <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
            검색 결과를 찾지 못했어요 ψ(｀∇´)ψ
          </div>
        )}
      </div>
    </div>
  );
}
