// import { useState, useEffect } from "react";
// import images from "../assets/images/importImages";
import CreateMyCourseFlowButton from "../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "./../api/react-query/courseApi";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/skeletonUI/Loader";
import TitleInputField from "../components/postEditor/TitleInputField";
import TagDisplay from "../components/postEditor/TagDisplay";
import CourseDetailDisplay from "../components/postEditor/CourseDetailDisplay";
import ImageUpLoadField from "../components/postEditor/ImageUpLoadField";
import DescriptionInputField from "../components/postEditor/DescriptionInputField";
import SelectedLocationsDisplay from "../components/postEditor/SelectedLocationsDisplay";
import useImageUpload from "../hooks/useImageUpload";
import { useState } from "react";
// import { editMyCourse } from "../api/postMyCourse";
// import { getChannelIdList } from "../utills/mycourse/setPostTitle";

export default function PostEditor() {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { imagePreview, selectedImage, handleImageUpload, errorMessage } =
    useImageUpload();

  const navigation = useNavigate();

  //  contentId 를 useParams으로 가져온다.
  const { contentId } = useParams<{ contentId: string }>();
  console.log(contentId);

  // courseData를 contendId로 가져온다.
  const { data: courseData, isLoading: isCourseLoading } = useQuery({
    queryKey: ["getCourses", contentId],
    queryFn: () => {
      if (!contentId) {
        throw new Error("Content ID is required");
      }
      return getCourses(contentId);
    },
    enabled: !!contentId,
  });
  console.log(courseData);
  const currentCourseTitleObj = JSON.parse(courseData.title);
  console.log(currentCourseTitleObj);

  const {
    courseTitle,
    courseDescription,
    estimatedTime,
    estimatedCost,
    locationObjs,
    withWhom,
    style,
  } = currentCourseTitleObj;

  const [title, setTitle] = useState(courseTitle)
  const [description, setDescription] = useState(courseDescription)

  console.log(selectedImage);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  return (
    <>
      {isCourseLoading ? (
        <div className="flex flex-col items-center justify-center h-[1000px]">
          <Loader />
        </div>
      ) : (
        <section className="flex flex-col items-center min-h-screen">
          {!isSaved && (
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
          )}

          <section
            className={`w-[767px] h-[1000px] bg-white shadow-lg rounded-3xl p-8 relative z-50 transform transition-all duration-700 ease-in-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[1500px]"
            }`}
            style={{
              paddingLeft: "60px",
              paddingTop: "82px",
              paddingRight: "59px",
            }}
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-6 w-[488px]">
                <TitleInputField
                  value={title}
                  handleTitleChange={handleTitleChange}
                />
                <TagDisplay tags={[...withWhom, ...style]} />
                <CourseDetailDisplay
                  estimatedTime={estimatedTime}
                  estimatedCost={estimatedCost}
                />
              </div>
              <ImageUpLoadField
                imagePreview={imagePreview}
                handleImageUpload={handleImageUpload}
                originImagePreview={courseData.image}
              />
            </div>

            <DescriptionInputField
              guidanceMessage="내 코스를 임팩트 있게 설명해주세요"
              value={description}
              handleDescriptionChange={handleDescriptionChange}
            />

            <SelectedLocationsDisplay locationObjs={locationObjs} />

            <div className="mt-10 text-center">
              <CreateMyCourseFlowButton
                onNext={() => navigation("..")}
                isCompleteThisPage={true}
              >
                변경내용 저장
              </CreateMyCourseFlowButton>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
//   const [editedTitle, setEditedTitle] = useState<string>(
//     currentCourseTitleObj.courseTitle
//   );
//   const [editedDescription, setEditedDescription] = useState<string>(
//     currentCourseTitleObj.courseDesription
//   );
//   const [editedImage, setEditedImage] = useState<File | null>(null);
//   const [isSaved, setIsSaved] = useState<boolean>(false);
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   useEffect(() => {
//     setTimeout(() => setIsVisible(true), 200);
//   }, []);
//   const handleImageUpload = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setEditedImage(file);
//     }
//   };

//   const handleEditComplete = async () => {
//     navigation("..");

//     const titleObj = {
//       ...currentCourseTitleObj,
//       courseTitle: editedTitle,
//       courseDescription: editedDescription,
//     };
//     const title = JSON.stringify(titleObj);
//     const channelIdList = getChannelIdList(currentCourseTitleObj.locationObjs);
//     const postId = contentId;
//     const image = editedImage;
//     const imageToDeletePublicId = null;

//     try {
//       // 모든 요청 처리 (성공/실패 포함)
//       const results = await Promise.allSettled(
//         channelIdList.map((channelId) =>
//           editMyCourse({
//             postId,
//             title,
//             image,
//             imageToDeletePublicId,
//             channelId,
//           })
//         )
//       );

//       // 결과 처리
//       results.forEach((result, index) => {
//         if (result.status === "fulfilled") {
//           console.log(
//             `Success for channelId ${channelIdList[index]}:`,
//             result.value
//           );
//         } else {
//           console.error(
//             `Error for channelId ${channelIdList[index]}:`,
//             result.reason
//           );
//         }
//       });
//     } catch (error) {
//       console.error("Unexpected error during course posting:", error);
//     }
//   };
