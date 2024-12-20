import { useEffect, useMemo, useState } from "react";
import { useCommentsStore } from "../../stores/useCommentsStore";
import MyCommentCards from "./MyComment/MyCommentCards";
import SearchBar from "../utills/SearchBar";


interface CommentType {
  author: string;
  comment: string;
  createdAt: string;
  post: string;
  _id: string;
}

export default function MyComment() {
  const { comments, fetchComments, posts, fetchPostById } = useCommentsStore();
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<CommentType[]>([]);

  useEffect(() => {
    if (!isFetched) {
      fetchComments();
      setIsFetched(true);
    }
  }, [isFetched, fetchComments]);

  useEffect(() => {
    comments.forEach((comment) => {
      fetchPostById(comment.post);
    });
  }, [comments, fetchPostById])

  const handleSearch = (result: CommentType[]) => {
    setFilteredData(result);
  };

  const commentCardData = useMemo<CommentType[]>(() => {
    return comments.map((comment) => {
      const post = posts[comment.post];
      return {
        ...comment,
        courseTitle: post?.courseTitle || "제목 없음",
        locationName: post?.locationObjs?.[0]?.locationName || "위치 정보 없음", 
      };
    });
  }, [comments, posts]);

  return (
    <div className={`flex flex-col items-center`}>
      {/* 검색바 */}
      <SearchBar
        data={commentCardData}
        searchKey="comment"
        onSearch={handleSearch}
        placeholder="내가 남긴 흔적 찾아보기 (oﾟvﾟ)ノ"
      />

    {/* 댓글 목록 카드 */}
    <div className={`mt-11`} >
      {comments && comments.length > 0 ? (
        <MyCommentCards 
          data={filteredData.length > 0 ? filteredData : comments} 
          postTitles={posts} />
      ) : (
        <div className="mt-10 text-center font-pretendard font-medium text-primary-700 text-sm">
          아직 댓글이 없네요 o(TヘTo)
        </div>
      )}
    </div>
    </div>
  );
}