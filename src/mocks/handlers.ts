import { http, HttpResponse } from "msw";

export const handlers = [
  // 전체 채널 목록 핸들러
  http.get("/channels", () => {
    return HttpResponse.json([
      { id: 1, name: "Channel A" },
      { id: 2, name: "Channel B" },
    ]);
  }),

  // 특정 채널 핸들러
  http.get("/channels/:channelName", ({ params }) => {
    const { channelName } = params;
    return HttpResponse.json({ id: 1, name: channelName });
  }),

  // 새로운 채널 생성 핸들러
  http.post("/channels/create", () => {
    return HttpResponse.json({ message: "New channel created!" });
  }),
];
