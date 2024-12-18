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
  contentId: string;
  contact: string;
  category: string;
}

interface ICourseSortToggleProps {
  activeSort: "latest" | "popular"; // 특정 문자열만 허용
  onSortChange: (sortType: "latest" | "popular") => void; // 콜백 함수 타입
}

// sebin -> author._id 추가
interface ICommentListItemProps {
  userName: string;
  userId: string;
  createdAt: string;
  comment: string;
}
// -------------------------------------------------

interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  _id: string;
  comment: string;
  author: User;
  post: string;
  createdAt: string;
  updatedAt: string;
}

interface Follower {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
}

// interface Notification {
//   seen: boolean;
//   _id: string;
//   author: string;
//   user: string;
//   post: string;
//   follow: string;
//   comment: string;
//   message: string;
//   createdAt: string;
//   updatedAt: string;
// }

interface Message {
  _id: string;
  message: string;
  sender: string;
  receiver: string;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  coverImage: string;
  image: string;
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: string[];
  likes: Like[];
  comments: string[];
  followers: Follower[];
  following: Follower[];
  notifications: Notification[];
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

interface Channel {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface LocationObj {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
}

interface Title {
  courseTitle: string;
  courseDescription: string;
  estimatedTime: string;
  estimatedCost: number;
  locationObjs: LocationObj[];
  withWhom: string[];
  style: string[];
}

interface Course {
  locationObjs: never[];
  courseDescription: string;
  courseTitle: string;
  likes: Like[];
  comments: Comment[];
  _id: string;
  image: string;
  imagePublicId: string;
  title: string;
  channel: Channel;
  author: User;
  createdAt: string;
  updatedAt: string;
}

interface Refetch {
  refetch: () => Promise<QueryObserverResult<any, Error>>;
}
