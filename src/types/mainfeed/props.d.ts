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
// -------------------------------------------------

interface LocationObj {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
}

interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Author {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: string[];
  likes: string[];
  comments: string[];
  followers: string[];
  following: string[];
  notifications: string[];
  messages: string[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface CourseObj {
  likes: string[];
  comments: string[];
  _id: string;
  title: string;
  image: string;
  imagePublicId: string;
  channel: Channel;
  author: Author;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
