import images from "../../assets/images/importImages";
import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";
interface Post {
  likes: any[];
  comments: any[];
  _id: string;
  title: string; // JSON 형식으로 전달된 문자열
  image: string;
  imagePublicId: string;
  channel: {
    authRequired: boolean;
    posts: string[];
    _id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  author: {
    role: string;
    emailVerified: boolean;
    banned: boolean;
    isOnline: boolean;
    posts: string[];
    likes: any[];
    comments: string[];
    followers: string[];
    following: string[];
    notifications: any[];
    messages: any[];
    _id: string;
    fullName: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function MyCourseCards({ courseList }: any) {
  console.log(courseList);
  return (
    <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
      {courseList.map((courseItem: Post, idx: number) => {
        return <AllCourseCardItem key={idx} courseItem={courseItem} />;
      })}
    </div>
  );
}
