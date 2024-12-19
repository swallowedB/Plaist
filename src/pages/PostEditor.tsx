import { useState, useEffect } from "react";
import images from "../assets/images/importImages";
import CreateMyCourseFlowButton from "../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "./../api/react-query/courseApi";
import { useNavigate, useParams } from "react-router";
import Loader from "../components/skeletonUI/Loader";
import { useConvertIcon } from "../utills/main/convertIcon";
import { editMyCourse } from "../api/postMyCourse";
import { getChannelIdList } from "../utills/mycourse/setPostTitle";

export default function PostEditor() {
  const navigation = useNavigate();
  const { contentId } = useParams<{ contentId: string }>();
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

  useEffect(() => {
    if (courseData) {
      const currentCourseTitleObj = JSON.parse(courseData.title);
      setEditedTitle(currentCourseTitleObj.courseTitle);
      setEditedDescription(currentCourseTitleObj.courseDescription);
    }
  }, [courseData]);

  const currentCourseTitleObj = courseData ? JSON.parse(courseData.title) : {};

  const [editedTitle, setEditedTitle] = useState<string>(
    currentCourseTitleObj.courseTitle
  );
  const [editedDescription, setEditedDescription] = useState<string>(
    currentCourseTitleObj.courseDesription
  );
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [editedImage, setEditedImage] = useState<File | null>(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditedImage(file);
    }
  };

  const handleEditComplete = async () => {
    navigation("..");

    const titleObj = {
      ...currentCourseTitleObj,
      courseTitle: editedTitle,
      courseDescription: editedDescription,
    };
    const title = JSON.stringify(titleObj);
    const channelIdList = getChannelIdList(currentCourseTitleObj.locationObjs);
    const postId = contentId;
    const image = editedImage;
    const imageToDeletePublicId = null;

    try {
      // 모든 요청 처리 (성공/실패 포함)
      const results = await Promise.allSettled(
        channelIdList.map((channelId) =>
          editMyCourse({
            postId,
            title,
            image,
            imageToDeletePublicId,
            channelId,
          })
        )
      );

      // 결과 처리
      results.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(
            `Success for channelId ${channelIdList[index]}:`,
            result.value
          );
        } else {
          console.error(
            `Error for channelId ${channelIdList[index]}:`,
            result.reason
          );
        }
      });
    } catch (error) {
      console.error("Unexpected error during course posting:", error);
    }
  };

  return (
    <>
      {isCourseLoading ? (
        <div className="flex flex-col items-center justify-center h-[1000px]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-screen">
          {!isSaved && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
          )}

          <div
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
            <div className="flex justify-between relative">
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="제목을 입력해주세요."
                  className="w-[299px] h-[36px] text-2xl font-pretendard text-custom-black font-semibold p-0 placeholder-gray-400 focus:outline-none"
                />

                <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[12px]">
                  {[
                    ...currentCourseTitleObj.withWhom,
                    ...currentCourseTitleObj.style,
                  ].map((item: string, index: number) => (
                    <li
                      key={index}
                      className="w-[72px] h-[34px] text-[14px] rounded-[30px] border-2 border-primary-600 font-pretendard text-center flex items-center justify-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-8 text-sm text-primary-600 font-pretendard">
                  <div className="flex items-center gap-2">
                    <img
                      src={images.course_estimated_time_icon}
                      alt="이동시간 아이콘"
                      className="w-4 h-4"
                    />
                    <span>
                      이동시간{" "}
                      {(
                        currentCourseTitleObj.estimatedTime / 60
                      ).toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 1,
                      })}
                      시간
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={images.course_budget_icon}
                      alt="예상금액 아이콘"
                      className="w-4 h-4"
                    />
                    <span>
                      예상금액{" "}
                      {currentCourseTitleObj.estimatedCost.toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 1,
                        }
                      )}
                      원
                    </span>
                  </div>
                </div>
              </div>

              <label className="absolute top-[20px] right-0 w-[136px] h-[136px] bg-primary-50 rounded-lg flex flex-col items-center justify-center border bg-center bg-cover cursor-pointer">
                {editedImage ? (
                  <img
                    src={URL.createObjectURL(editedImage)}
                    alt="업로드된 이미지 미리보기"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src={courseData.image}
                    alt="기존 이미지"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            <div className="mt-6 text-base font-semibold text-custom-black font-pretendard">
              내 코스를 임팩트 있게 소개해주세요.
            </div>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="font-pretendard text-custom-black w-[645px] h-[83px] rounded-lg p-4 text-sm focus:outline-none resize-none"
              style={{ backgroundColor: "rgba(180, 184, 201, 0.2)" }}
            />
            <div className="relative flex items-center justify-center gap-[56px]">
              {locationObjs.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div
                    className="w-[120px] h-[120px] bg-primary-200 rounded-full flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${useConvertIcon(
                        location.locationCategory
                      )})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <span className="font-pretendard text-sm text-primary-600 font-semibold text-center mt-2">
                    {location.locationName}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <CreateMyCourseFlowButton
                onNext={handleEditComplete}
                isCompleteThisPage={
                  !!editedTitle.trim() && !!editedDescription.trim()
                }
              >
                변경내용 저장
              </CreateMyCourseFlowButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
