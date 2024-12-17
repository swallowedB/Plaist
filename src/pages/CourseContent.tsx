import { useParams } from "react-router";
import images from "../assets/images/importImages";
import CourseContentDoc from "../components/main/courseContent/CourseContentDoc";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/react-query/api";
import Loader from "../components/skeletonUI/Loader";
import { useEffect } from "react";
import { useCommentStore } from "../stores/main/commentsStore";

export default function CourseContent() {
  const { contentId } = useParams<{ contentId: string }>();
  const { comments, setComments } = useCommentStore();

  const { data: courseData, isLoading: isCourseLoading } = useQuery({
    queryKey: ["getCourses", contentId],
    queryFn: () => {
      if (!contentId) {
        throw new Error("Content ID is required");
      }
      return getCourses(contentId!);
    },
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (courseData) {
      setComments( courseData.comments );
    }
  }, [courseData, setComments]);
  console.log(comments);
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
              <div className="absolute h-[49px] w-[49px] bg-custom-black opacity-50 rounded-full right-[60px] top-[-79px] flex justify-center items-center cursor-pointer">
                <img
                  src={images.white_heart_filled_icon}
                  alt=""
                  className="w-[25px] h-[21px]"
                />
              </div>

              <div className="px-[61px] h-auto overflow-y-auto ">
                <CourseContentDoc courseObj={courseData!} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
