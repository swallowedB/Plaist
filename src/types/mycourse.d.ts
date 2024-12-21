type FullLocationObj = {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: number;
};

type FullLocationObjs = {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: number;
}[];

interface MapviewProps {
  onNext: (location: FullLocationObj) => void;
}

interface SelectCourseMainProps {
  locationObjs: FullLocationObjs;
  locationObjDelete: (id: number) => void;
  onPlus: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: FullLocationObjs
  ) => void;
  onNext: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: FullLocationObjs,
    channelIdList: string[]
  ) => void;
}

// post api title에 해당하는 데이터의 obj형태
interface TitleObj {
  courseTitle: string;
  courseDescription: string;
  estimatedTime: number;
  estimatedCost: number;
  locationObjs: FullLocationObjs;
  withWhom: string[];
  style: string[];
}

// 컴포넌트 별 props 타입
interface ExplainCourseProps {
  locationObjs: FullLocationObjs;
  withWhom: string[];
  style: string[];
  estimatedTime: number;
  estimatedCost: number;
  onNext: (
    courseTitle: string,
    courseDescription: string,
    image: File | null
  ) => void;
}
interface SuccessMyPostProps {
  onNext: () => void;
}
type OnNextInputTags = (withWhom: string[], style: string[]) => void;

// api 호출시 매개변수
interface PostMyCourseProps {
  title: string;
  image: File | undefined;
  channelId: string;
}

interface EditMyCourseProps {
  postId: string | undefined;
  title: string;
  image?: File | undefined;
  imageToDeletePublicId?: string | null;
  channelId: string;
}

interface ImageUploadFieldProps {
  imagePreview: string | null;
  handleImageUpload: () => void;
  originImagePreview?: string | null;
}

interface CourseData {
  author: {
    role: string;
    emailVerified: boolean;
    banned: boolean;
    isOnline: boolean;
    posts: string[];
  };
  channel: {
    authRequired: boolean;
    posts: string[];
    _id: string;
    name: string;
    description: string;
  };
  comments: string[];
  createdAt: string;
  likes: {
    reatedAt: string;
    post: string;
    updatedAt: string;
    user: string;
    __v: number;
    _id: string;
  };
  title: string; // JSON 문자열
  updatedAt: string;
  _id: string;
  image: string | undefined | null;
  imagePublicId: string;
}
