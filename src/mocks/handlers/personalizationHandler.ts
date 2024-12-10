import { http, HttpResponse } from "msw";

export const personalizationHandlers = [
  http.post(`/follow/create`, async ({ request }) => {
    const requestBody = (await request.json()) as { userId: string };
    const userId = requestBody?.userId;
    if (userId === "jade") {
      return HttpResponse.json({
        _id: "6757b2f5a683327a2010103c",
        user: "6756f7b922625479237f33c0",
        follower: "64edba4f8f63f012a6741681",
        createdAt: "2024-12-10T03:18:13.416Z",
        updatedAt: "2024-12-10T03:18:13.416Z",
        __v: 0,
      });
    }
    return HttpResponse.json([]);
  }),

  http.delete(`/follow/delete`, async () => {
    return HttpResponse.json({ success: false }, { status: 400 });
  }),
];
