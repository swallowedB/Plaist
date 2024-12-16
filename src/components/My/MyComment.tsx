import { useState } from "react";
import SearchBar from "../utills/SearchBar";
import MyCommentCards from "./MyComment/MyCommentCards";

type CommentData = {
  id: string;
  comment: string;
  createdAt: string;
};

type PostData = {
  id: string;
  title: string;
  likes: number;
  location: string;
  comments: CommentData[];
};

// test 데이터
const testData: PostData[] = [
  {
    id: "1",
    title: "✨ 2025 새해 모임",
    likes: 4,
    location: "seoul",
    comments: [
      {
        id: "1",
        comment: "4~5명이 모여서 즐기기 딱 좋은 코스였습니다👍 좋은 정보 공유 감사합니다😇",
        createdAt: "2024.10.10",
      },
    ],
  },
  {
    id: "2",
    title: "✨ 2026 새해 모임",
    likes: 5,
    location: "seoul",
    comments: [
      {
        id: "2",
        comment: "멋진 장소와 분위기였습니다. 추천해요!",
        createdAt: "2024.11.11",
      },
    ],
  },
];


export default function MyComment() {
  const [filteredData, setFilteredData] = useState<PostData[]>(testData|| []);

  return (
    <div className={`flex flex-col items-center`}>
      <SearchBar
        data={testData}
        searchKey="title"
        onSearch={setFilteredData}
        placeholder="어떤 것이든 검색해보세요 (oﾟvﾟ)ノ"
      />
      {/* 필터링된 데이터 렌더링 */}
      <div className="mt-8 flex flex-col">
        {filteredData.length > 0 ? (
            <MyCommentCards data={filteredData} />
          ) : (
            <div className="mt-10 col-span-3 font-semiBold text-center text-primary-700 font-pretendard text-sm">
              검색 결과를 찾지 못했어요 ψ(｀∇´)ψ
            </div>
          )}
      </div>
    </div>
  )
}
