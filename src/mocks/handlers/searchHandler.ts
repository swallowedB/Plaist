import { http, HttpResponse } from "msw";

export const searchHandlers = [
  // 사용자 혹은 게시물을 검색합니다.
  http.get(`/search/all/:searchQuery`, ({ params }) => {
    const { searchQuery } = params;
    console.log(searchQuery);
    if (searchQuery === "안녕") {
      return HttpResponse.json([
        {
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
        },
      ]);
    }

    return HttpResponse.json([]);
  }),

  // 사용자를 검색합니다.
  http.get(`/search/users/:searchQuery`, ({ params }) => {
    const { searchQuery } = params;
    if (searchQuery === "tes2") {
      return HttpResponse.json([
        {
          role: "Regular",
          emailVerified: false,
          banned: false,
          isOnline: false,
          posts: [],
          likes: [],
          comments: ["6756f87607ca3b7964de7ba3", "6756fa7407ca3b7964de7bc8"],
          followers: [
            {
              _id: "6757129aa683327a20100ed3",
              user: "6756f7b922625479237f33c0",
              follower: "6756d9a6442fa2128bcabefd",
              createdAt: "2024-12-09T15:54:02.949Z",
              updatedAt: "2024-12-09T15:54:02.949Z",
              __v: 0,
            },
          ],
          following: [],
          notifications: [],
          messages: ["6756d9a6442fa2128bcabefd"],
          _id: "6756f7b922625479237f33c0",
          fullName: "tes2",
          email: "tes2@gmail.com",
          createdAt: "2024-12-09T13:59:21.803Z",
          updatedAt: "2024-12-09T15:54:02.950Z",
          __v: 0,
        },
      ]);
    }

    return HttpResponse.json([]);
  }),
];
