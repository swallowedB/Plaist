interface Notification {
  seen: boolean;
  _id: string;
  author: Author; // 객체 형식으로 변경해야
  user: string; // useId
  post: string; //postId
  comment?: Comment;
  like?: Like;
  follow?: Follower;
  createdAt: string;
  updatedAt: string;
}

interface Author {
  role: string;
  emailVerified: boolean;
  banned: boolean;
  isOnline: boolean;
  posts: string[];
  likes: string[];
  comment: string[];
  followers: string[];
  following: string[];
  image: string;
  notifications: string[];
  messages: string[];
  _id: string;
  fullName: string;
}

type NotificationType = "LIKE" | "COMMENT" | "FOLLOW";
