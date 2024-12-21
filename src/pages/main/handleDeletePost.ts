import { toast } from "react-toastify";
import { deleteMyCourse } from "../../api/postMyCourse";
import { getChannelPostList } from "../../api/postApi";

// 유효한 채널 ID 목록 가져오기
export const getValidChannelIdList = (
  channelIdList: (string | null)[]
): string[] => {
  return [
    ...channelIdList.filter(
      (channelId): channelId is string => channelId !== null
    ),
  ];
};

// 채널 ID 목록에서 게시물 ID 가져오기
export const fetchPostIdsFromChannels = async (
  validChannelIdList: string[],
  courseData: CourseData
): Promise<string[]> => {
  const postIds: string[] = [];

  await Promise.all(
    validChannelIdList.map(async (channelId) => {
      try {
        const postList = await getChannelPostList(channelId);
        const matchedPost = postList.find(
          (post: Course) => post.title === courseData.title
        );
        if (matchedPost) {
          postIds.push(matchedPost._id);
        }
      } catch (error) {
        console.error(`채널 ID ${channelId}에서 게시물 가져오기 실패:`, error);
      }
    })
  );

  return postIds;
};

// 게시물 삭제 처리
export const deletePosts = async (postIdsToDelete: string[]) => {
  try {
    await Promise.allSettled(
      postIdsToDelete.map((postId: string) => deleteMyCourse(postId))
    ); // 삭제 로직 호출
    toast.success("게시물이 삭제되었습니다.");
    return true;
  } catch (error) {
    console.error(
      `게시물 삭제 실패. Post IDs: ${postIdsToDelete.join(", ")}, Error:`,
      error
    );
    toast.error("삭제 중 오류가 발생했습니다.");
    return false;
  }
};
