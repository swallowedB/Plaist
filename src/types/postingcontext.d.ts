type InputTagsContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: FullLocationObjs;
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom: string[];
  style: string[];
  image?: File | undefined;
  channelIdList?: string[];
};

type InputCourseDetailsContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs?: FullLocationObjs;
  estimatedTime?: number;
  estimatedCost?: number;
  withWhom: string[];
  style: string[];
  image?: File | undefined;
  channelIdList?: string[];
};

type InputLocationContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs: FullLocationObjs;
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  style: string[];
  image?: File | undefined;
  channelIdList?: string[];
};

type InputExplainationContext = {
  courseTitle?: string;
  courseDescription?: string;
  locationObjs: FullLocationObjs;
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  style: string[];
  image?: File | undefined;
  courseImage?: string;
  channelIdList: string[];
};

type PostResultContext = {
  courseTitle: string;
  courseDescription: string;
  locationObjs: FullLocationObjs;
  estimatedTime: number;
  estimatedCost: number;
  withWhom: string[];
  style: string[];
  image: File | undefined;
  channelIdList: string[];
};
