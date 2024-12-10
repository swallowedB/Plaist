import { http, HttpResponse } from "msw";

// 핸들러 정의
export const searchHandlers = [
  http.get(`/search/all/:searchQuery`, ({ params }) => {
    const { searchQuery } = params;
    if (searchQuery === "안녕") {
      return HttpResponse.json({
        likes: [],
        comments: ["6756fa7407ca3b7964de7bc8"],
        _id: "6756f518442fa2128bcabf72",
        title: "안녕하세요",
        image:
          "https://res.cloudinary.com/learnprogrammers/image/upload/v1733752088/post/d10c3640-dfb7-47d5-a854-307b6b0dd5de.jpg",
        imagePublicId: "post/d10c3640-dfb7-47d5-a854-307b6b0dd5de",
        channel: "6756f242442fa2128bcabf40",
        author: "6756d9a6442fa2128bcabefd",
        createdAt: "2024-12-09T13:48:08.786Z",
        updatedAt: "2024-12-09T14:11:00.875Z",
        __v: 0,
      });
    }

    // fallback 응답
    return HttpResponse.json([]);
  }),

  http.get(`search/users/:searchQuery`, ({ params }) => {
    const { searchQuery } = params;
    if (searchQuery === "jade") {
      return HttpResponse.json(
        [{
          role: "Regular",
          emailVerified: false,
          banned: false,
          isOnline: false,
          posts: [],
          likes: [],
          comments: ["6756f87607ca3b7964de7ba3", "6756fa7407ca3b7964de7bc8"],
          followers: [
            // ... followers data
          ],
          following: [],
          notifications: [],
          messages: ["6756d9a6442fa2128bcabefd"],
          _id: "6756f7b922625479237f33c0",
          fullName: "jade",
          email: "jade@gmail.com",
          createdAt: "2024-12-09T13:59:21.803Z",
          updatedAt: "2024-12-10T03:18:13.418Z",
          __v: 0,
        },
]);
    }
  }),
];
