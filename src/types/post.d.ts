type LocationObjsItemType = {
  locationName: string;
  locationAddress: string;
  locationCategory: string;
  locationPhoneNum: string;
};

// Post 속성 타입
// 속성의 속성 -> 속성Item

type TitleType = {
  id: string; // UUID
  courseTitle: string;
  courseDescription: string;
  estimatedTime: number; // 분 단위
  estimatedCost: number; // 원 단위
  locationObjs: LocationObjsItemType[];
  withWhom: string;
  style: string;
};

type LikeType = {};

type CommentType = {};

type Post = {
  title: string;
  likes: LikeType[];
  comments?: CommentType[];
  _id?: string;
  image: string;
  [key: string]: any;
};