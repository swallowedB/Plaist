import { useNavigate, useParams } from "react-router";
import CourseContentDoc from "../../components/main/courseContent/CourseContentDoc";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/react-query/courseApi";
import Loader from "../../components/skeletonUI/Loader";
import { useEffect, useState } from "react";
import { useCommentStore } from "../../stores/main/comment/useCommentStore";
import LikeButton from "../../components/main/courseContent/LikeButton";
import images from "../../assets/images/importImages";
import PostEditor from "./../PostEditor";
import { useUserStore } from "../../stores/useInfoStore";
import { deleteMyCourse } from "./../../api/postMyCourse";
import { getChannelIdList } from "./../../utills/mycourse/setPostTitle";
import { getChannelPostList } from "./../../api/postApi";
import { toast } from "react-toastify";

export default function CourseContent() {
  const navigate = useNavigate();
  const { contentId } = useParams<{ contentId: string }>();
  const { setComments } = useCommentStore();

  const {
    data: courseData,
    isLoading: isCourseLoading,
    refetch,
  } = useQuery({
    queryKey: ["getCourses", contentId],
    queryFn: () => {
      if (!contentId) {
        throw new Error("Content ID is required");
      }
      return getCourses(contentId!);
    },
  });

  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    if (courseData) {
      setComments(courseData.comments);
      setLikeCount(courseData.likes.length);
    }
  }, [courseData, setComments]);

  const handleLike = (calc: 1 | -1) => {
    setLikeCount((prev) => prev + calc);
  };

  const { setUserId, userId } = useUserStore();
  useEffect(() => {
    setUserId();
  }, [userId]);

  const [isEditorOpened, setEditorOpened] = useState<boolean>(false);

  const onEditClicked = () => {
    setEditorOpened(true);
  };

  const onExitEditor = () => {
    setEditorOpened(false);
    refetch();
  };

  const onDeleteClicked = async () => {
    const titleStringtoObj = JSON.parse(courseData.title);
    const channelIdList = getChannelIdList(titleStringtoObj.locationObjs);
    console.log(channelIdList, "채널리스트");

    let postIdsToDelete = [];

    // channelIdList에서 null을 제거한 후 진행
    const validChannelIdList = channelIdList.filter(
      (channelId: string | null) => channelId !== null
    );

    await Promise.all(
      validChannelIdList.map(async (channelId: string) => {
        try {
          const postList = await getChannelPostList(channelId); // 현재 게시물의 코스 지역에 해당하는 채널의 모든 게시물
          const matchedPost = postList.find(
            (post: CourseData) => post.title === courseData.title
          );
          if (matchedPost) {
            postIdsToDelete.push(matchedPost._id); // 삭제 대상 ID 추가
          }
        } catch (error) {
          console.error(
            `채널 ID ${channelId}에서 게시물 가져오기 실패:`,
            error
          );
        }
      })
    );

    validChannelIdList.push("675e6ed26ada400ee6bec120");

    if (contentId) {
      postIdsToDelete.push(contentId);
    }

    try {
      await Promise.all(
        postIdsToDelete.map((postId) => deleteMyCourse(postId))
      );
      refetch();
      alert("해당 게시물이 삭제되었습니다");
      navigate("/my-page"); // 마이페이지로 이동
    } catch (error) {
      console.error("삭제 실패:", error);
    }
  };

  return (
    <>
      {isCourseLoading ? (
        <div className="flex flex-col items-center justify-center h-[1500px]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="relative w-full h-auto rounded-lg shadow-lg">
            <div className="relative">
              <img
                src={
                  courseData.image
                    ? courseData.image
                    : images.course_background_img
                }
                alt="background"
                className="object-cover w-full h-[500px] object-center"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full top-[419px]">
              <div className="py-[38px] bg-[#F9FBFE] rounded-t-[40px]  shadow-[0_-8px_10px_0_rgba(48,72,100,0.25)] h-auto min-h-[1200px] pb-[120px]">
                <LikeButton courseObj={courseData} onLike={handleLike} />
                <div className="px-[61px] h-auto overflow-y-auto ">
                  <CourseContentDoc
                    courseObj={courseData}
                    likeCount={likeCount}
                    userId={userId}
                    onEditClicked={onEditClicked}
                    onDeleteClicked={onDeleteClicked}
                  />
                </div>
              </div>
            </div>
            <PostEditor
              isEditorOpened={isEditorOpened}
              onExitEditor={onExitEditor}
              courseObj={courseData}
            />
          </div>
        </>
      )}
    </>
  );
}
