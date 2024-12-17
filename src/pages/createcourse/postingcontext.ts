export type InputTags = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: string;
  }[];
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom: string[];
  styles: string[];
  image?: string;
  channelId?: string;
};

export type InputCourseDetails = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: string;
  }[];
  estimatedTime: number;
  estimatedCost: number;
  withWhom?: string[];
  styles?: string[];
  image?: string;
  channelId: string;
};

export type InputLocation = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: string;
  }[];
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom?: string[];
  styles?: string[];
  image?: string;
  channelId: string;
};

export type InputExplaination = {
  courseTitle: string;
  courseDescription: string;
  locationObjs?: {
    locationName: string;
    locationAddress: string;
    locationCategory: string;
    locationPhoneNum: string;
    location_id: string;
    like: string;
  }[];
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom?: string[];
  styles?: string[];
  image: string;
  channelId?: string;
};
