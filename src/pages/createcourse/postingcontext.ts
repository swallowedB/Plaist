export type InputTagsContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
  }[];
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom: string[];
  styles: string[];
  image?: string;
  channelIdList?: string[];
};

export type InputCourseDetailsContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
  }[];
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom: string[];
  styles: string[];
  image?: string;
  channelIdList?: string[];
};

export type InputLocationContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
  }[];
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  styles: string[];
  image?: string;
  channelIdList?: string[];
};

export type InputExplainationContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
  }[];
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  styles: string[];
  image?: string;
  channelIdList: string[];
};

export type PostResultContext = {
  courseTitle: string;
  courseDescription: string;
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: number;
  }[];
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  styles: string[];
  image: string;
  channelIdList: string[];
};
