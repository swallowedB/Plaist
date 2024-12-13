type ChannelType = {
  authRequired: boolean;
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type ChannelCreateRequestType = {
  authRequired: boolean;
  description: string;
  name: string;
};

interface State {
  location: { id: string; name: string };
  spot: { id: string; name: string };
  channelList: { location: ChannelType[]; spot: ChannelType[] };
}

interface Action {
  setLocation: (id: string, name: string) => void;
  setSpot: (id: string, name: string) => void;
  setChannelList: (channels: ChannelType[]) => void;
}
