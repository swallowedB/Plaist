import { useParams } from "react-router";
import CourseContentDoc from "../../components/main/courseContent/CourseContentDoc";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/react-query/courseApi";
import Loader from "../../components/skeletonUI/Loader";
import { useEffect, useState } from "react";
import { useCommentStore } from "../../stores/main/comment/useCommentStore";
import LikeButton from "../../components/main/courseContent/LikeButton";

export default function CourseContent() {
  const { contentId } = useParams<{ contentId: string }>();
  const { setComments } = useCommentStore();

  const { data: courseData, isLoading: isCourseLoading } = useQuery({
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

  return (
    <>
      {isCourseLoading ? (
        <div className="flex flex-col items-center justify-center h-[1000px]">
          <Loader />
        </div>
      ) : (
        <div className="relative w-full h-auto hadow-lg hrounded-lg">
          <div className="relative">
            <img
              src={courseData?.image}
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
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
