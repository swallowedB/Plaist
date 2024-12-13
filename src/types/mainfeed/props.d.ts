interface ICourseCardItemProps {
  title: string;
  rating: number;
  location: string;
  imageUrl: string;
  contentId: string;
  contact: string;
}

// 중복되는 부분 추후 리펙토리 필요
interface ICourseLocationCardItemProps {
  title: string;
  rating: number;
  location: string;
  imageUrl: string;
  contentId: string;
  contact: string;
  category: string;
}

interface ICourseSortToggleProps {
  activeSort: "latest" | "popular"; // 특정 문자열만 허용
  onSortChange: (sortType: "latest" | "popular") => void; // 콜백 함수 타입
}

interface ICommentListItemProps {
  userName: string;
  createdAt: string;
  comment: string;
}
