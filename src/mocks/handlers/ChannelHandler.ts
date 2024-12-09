import { http, HttpResponse } from "msw";

export const ChannelHandlers = [
  // 전체 채널 목록 핸들러
  http.get("/channels", () => {
    return HttpResponse.json({
      area: [
        "서울",
        "경기",
        "인천",
        "강원",
        "충남",
        "충북",
        "세종",
        "부산",
        "울산",
        "대구",
        "경북",
        "경남",
        "전남",
        "광주",
        "전북",
        "제주",
        "전국",
      ],
      spot: [],
    });
  }),

  // 특정 채널 핸들러
  http.get("/channels/:channelName", ({ params }) => {
    const { channelName } = params;
    return HttpResponse.json(channelName);
  }),

  // 새로운 채널 생성 핸들러
  http.post("/channels/create", () => {
    return HttpResponse.json({ message: "New channel created!" });
  }),
];

// (Post, Like, Comment)

// (Notification, Follow)
// (Message)
// Search
