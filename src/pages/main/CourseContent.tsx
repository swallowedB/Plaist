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

  // 수정 창 열기
  const onEditClicked = () => {
    setEditorOpened(true);
  };

  // 수정 완료 후 Editor 종료 및 데이터 갱신을 위해 refetch 호출
  const onExitEditor = () => {
    setEditorOpened(false);
    refetch(); // 데이터 갱신을 위해 refetch 호출
    console.log("테스트");
  };

  // 삭제 버튼 클릭 시
  const onDeleteClicked = async () => {
    if (contentId) {
      try {
        // 삭제 요청
        await deleteMyCourse(contentId);

        // 삭제 후 데이터 갱신
        refetch();
        alert("해당 게시물이 삭제되었습니다");
        navigate("/"); // -1로 설정하면 이전 페이지로 이동
      } catch (error) {
        console.error("삭제 실패:", error);
      }
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
                className="object-cover w-full"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-full top-[419px]">
              <div className="py-[38px] bg-[#F9FBFE] rounded-t-[40px]  shadow-[0_-8px_10px_0_rgba(48,72,100,0.25)] h-auto min-h-[1800px]">
                <LikeButton courseObj={courseData} onLike={handleLike} />
                <div className="px-[61px] h-auto overflow-y-auto ">
                  <CourseContentDoc
                    courseObj={courseData}
                    likeCount={likeCount}
                    userId={userId}
                    onEditClicked={onEditClicked}
                    onDeleteClicked={onDeleteClicked} // 삭제 함수 연결
                  />
                </div>
              </div>
            </div>
          </div>
          <PostEditor
            isEditorOpened={isEditorOpened}
            onExitEditor={onExitEditor}
            courseObj={courseData}
          />
        </>
      )}
    </>
  );
}
