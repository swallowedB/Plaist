import { http, HttpResponse } from "msw";

let channels = [
  {
    authRequired: false,
    posts: [
      "string", // postId
    ],
    _id: "001",
    name: "서울",
    description: "지역",
    createdAt: "24-01-01",
    updatedAt: "24-01-02",
  },
  {
    authRequired: false,
    posts: [
      "string", // postId
    ],
    _id: "002",
    name: "경기",
    description: "지역",
    createdAt: "24-01-01",
    updatedAt: "24-01-02",
  },
  {
    authRequired: false,
    posts: [
      "string", // postId
    ],
    _id: "003",
    name: "음식점",
    description: "스팟",
    createdAt: "24-01-01",
    updatedAt: "24-01-02",
  },
  {
    authRequired: false,
    posts: [
      "string", // postId
    ],
    _id: "004",
    name: "기본",
    description: "지역",
    createdAt: "24-01-01",
    updatedAt: "24-01-02",
  },
];

export const channelHandlers = [
  // 전체 채널 목록 핸들러
  http.get("/channels", () => {
    return HttpResponse.json(channels);
  }),

  // 특정 채널 핸들러
  http.get("/channels/:channelName", ({ params }) => {
    const { channelName } = params;
    const DEFAULT_CHANNEL = channels.filter(
      (channel) => (channel.name = "기본")
    );
    for (let item of channels) {
      if (item.name === channelName) return HttpResponse.json(item);
    }
    return HttpResponse.json(DEFAULT_CHANNEL);
  }),

  // 새로운 채널 생성 핸들러
  http.post("/channels/create", async ({ request }) => {
    interface ChannelRequest {
      authRequired: boolean;
      name: string;
      description: string;
    }

    const requestBody: ChannelRequest =
      (await request.json()) as ChannelRequest;
    if (!requestBody.name || !requestBody.description)
      return new HttpResponse(null, {
        status: 404,
        statusText:
          "Need a valid request form {authRequired: Boolean, name: string, description: string}",
      });

    const newChannel = {
      authRequired: requestBody.authRequired || false,
      posts: [],
      _id: `channel_${Date.now()}`,
      name: requestBody.name,
      description: requestBody.description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    channels.push(newChannel);
    return HttpResponse.json(newChannel);
  }),
];
