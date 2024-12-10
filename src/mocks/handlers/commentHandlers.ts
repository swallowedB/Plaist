import { http, HttpResponse } from "msw";

export const commentHandlers = [
  http.post("/comments/create", async ({ request }) => {
    const { comment, postId } = await request.json();

    console.log("작성된 댓글:", comment);
    console.log("댓글이 달릴 포스트 ID:", postId);

    return HttpResponse.json({
      _id: "6757eccbf7065d133c677d20",
      comment,
      author: {
        role: "SuperAdmin",
        emailVerified: true,
        banned: false,
        isOnline: false,
        posts: [],
        likes: [],
        comments: [],
        followers: [],
        following: ["6757abbba683327a20101030", "6757b2f5a683327a2010103c"],
        notifications: [],
        messages: [],
        _id: "64edba4f8f63f012a6741681",
        fullName: "어드민",
        email: "admin@programmers.co.kr",
        password:
          "$2a$10$tAGNcq5KlRW/YeoaG5VS.O2Ozx95uzGlYNxLEf/pLU4Q8H4Wy8G9m",
        createdAt: "2023-08-29T09:28:47.968Z",
        updatedAt: "2024-12-10T05:27:37.244Z",
        coverImage:
          "https://res.cloudinary.com/learnprogrammers/image/upload/v1695025510/user/032d7af6-9dcd-4ea1-aa79-f497e1c2276a.svg",
        coverImagePublicId: "user/032d7af6-9dcd-4ea1-aa79-f497e1c2276a",
        username: "650d31d288787a777cdc21c2",
        image:
          "https://res.cloudinary.com/learnprogrammers/image/upload/v1695621922/user/a01f2d7e-1d3d-4eb2-b0b8-a2fcb879ea76.gif",
        imagePublicId: "user/a01f2d7e-1d3d-4eb2-b0b8-a2fcb879ea76",
      },
      post: postId,
      createdAt: "2024-12-10T07:24:59.285Z",
      updatedAt: "2024-12-10T07:24:59.285Z",
      __v: 0,
    });
  }),
];
