interface LocationObj {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
  location_id: string;
  like: number;
}
interface MapviewProps {
  onNext: (location: LocationObj) => void;
}

interface SelectCourseMainProps {
  locationObjs: LocationObj[];
  locationObjDelete: (id: number) => void;
  onPlus: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[]
  ) => void;
  onNext: (
    estimatedTime: number,
    estimatedCost: number,
    locationObjs: LocationObj[],
    channelIdList: string[]
  ) => void;
}

// post api title에 해당하는 데이터의 obj형태
interface TitleObj {
  courseTitle: string;
  courseDescription: string;
  estimatedTime: number;
  estimatedCost: number;
  locationObjs: LocationObj;
  withWhom: string[];
  style: string[];
}

// 컴포넌트 별 props 타입
interface ExplainCourseProps {
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
    locationImage?: string;
  }[];
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
  image: File | undefined;
  imageToDeletePublicId?: string;
  channelId: string;
}
