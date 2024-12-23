import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFunnel } from "@use-funnel/react-router-dom";

import { postMyCourse } from "../../api/postMyCourse";
import images from "../../assets/images/importImages";
import SelectTag from "../../components/createMyCourse/SelectTag";
import SelectCourseMain from "../../components/createMyCourse/SelectCourseMain";
import ExplainCourse from "../../components/createMyCourse/ExpainCourse";
import SucessMyPost from "../../components/createMyCourse/SucessMyPost";
import Mapview from "../../components/createMyCourse/MapView";

type ContextByStep = {
  태그입력: InputTagsContext;
  코스상세입력: InputCourseDetailsContext;
  장소선택: InputLocationContext;
  게시글작성: InputExplainationContext;
  완료: object;
};

export default function CreateMyCourse() {
  const navigate = useNavigate();
  let postId = "";
  const getProgressBarImage = (step: keyof ContextByStep) => {
    const stepNumber = {
      태그입력: 1,
      코스상세입력: 2,
      장소선택: 2,
      게시글작성: 3,
      완료: 4,
    }[step];

    return images[`progress_bar${stepNumber}`] || images["default_progress"];
  };

  const funnel = useFunnel<ContextByStep>({
    id: "my-funnel-app",
    initial: {
      step: "태그입력",
      context: { withWhom: [], style: [], locationObjs: [] },
    },
  });

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo(0, 0);
    }
  }, [funnel.step]);

  console.log(funnel.step);

  const handlePostCourseResult = async () => {
    const {
      courseTitle,
      courseDescription,
      estimatedTime,
      estimatedCost,
      locationObjs,
      withWhom,
      style,
      image,
      channelIdList,
    } = funnel.context as PostResultContext;

    const validChannelIdList = channelIdList.filter(
      (channelId) => channelId !== null
    );

    const titleObj = {
      courseTitle,
      courseDescription,
      estimatedTime,
      estimatedCost,
      locationObjs,
      withWhom,
      style,
    };

    validChannelIdList.push("675e6ed26ada400ee6bec120");

    console.log(titleObj, "타이틀obj 잘 들어갔는지");
    const title = JSON.stringify(titleObj);
    console.log(title, "title 변수 잘 들어갔는지");
    console.log(validChannelIdList, "channel리스트는 제대로 들어갔는지");
    console.log(image, "이미지 잘 들어갔는지");

    try {
      // 각 channelId에 대해 API 호출
      await Promise.all(
        validChannelIdList.map(async (channelId: string) => {
          const response = await postMyCourse({
            title,
            image,
            channelId,
          });
          const ALL_CHANNEL_ID = "675e6ed26ada400ee6bec120";
          if (channelId === ALL_CHANNEL_ID) postId = response._id;
          console.log(
            `Sucess for Channel ID: ${channelId}, Response:`,
            response
          );
        })
      );
    } catch (error) {
      console.error("Course posting failed:", error);
    }
  };
  return (
    <div className="mt-[84px] max-w-[767px] flex flex-col items-center">
      <aside>
        <figure>
          <img src={getProgressBarImage(funnel.step)} alt="Progress bar" />
        </figure>
      </aside>

      {/* step별 렌더링 */}
      {(() => {
        switch (funnel.step) {
          case "태그입력":
            return (
              <SelectTag
                onNext={(withWhom, style) =>
                  funnel.history.push("코스상세입력", {
                    withWhom,
                    style,
                  })
                }
              />
            );
          case "코스상세입력":
            return (
              <SelectCourseMain
                locationObjs={funnel.context.locationObjs || []}
                locationObjDelete={(id: number) => {
                  const updatedLocationObjs =
                    funnel.context.locationObjs?.filter(
                      (_, index) => index !== id
                    );

                  funnel.history.replace("코스상세입력", {
                    ...funnel.context,
                    locationObjs: updatedLocationObjs,
                  });

                  console.log(updatedLocationObjs);
                }}
                onPlus={(estimatedTime, estimatedCost, locationObjs) => {
                  funnel.history.push("장소선택", {
                    estimatedTime,
                    estimatedCost,
                    locationObjs,
                  });
                }}
                onNext={(
                  estimatedTime,
                  estimatedCost,
                  locationObjs,
                  channelIdList
                ) => {
                  funnel.history.push("게시글작성", {
                    estimatedTime,
                    estimatedCost,
                    locationObjs,
                    channelIdList,
                  });
                }}
              />
            );
          case "장소선택":
            return (
              <Mapview
                onNext={(location) => {
                  const existingLocations = funnel.context.locationObjs || [];
                  const isLocationExist = existingLocations.find(
                    (loc) => loc.locationAddress === location.locationAddress
                  );
                  const updatedLocationObjs = isLocationExist
                    ? existingLocations
                    : [...existingLocations, location];
                  funnel.history.replace("코스상세입력", {
                    locationObjs: updatedLocationObjs,
                  });
                }}
              />
            );
          case "게시글작성":
            return (
              <ExplainCourse
                locationObjs={funnel.context.locationObjs}
                withWhom={funnel.context.withWhom}
                style={funnel.context.style}
                estimatedTime={funnel.context.estimatedTime}
                estimatedCost={funnel.context.estimatedCost}
                onNext={(courseTitle, courseDescription, image) => {
                  funnel.history.push("완료", {
                    courseTitle,
                    courseDescription,
                    image,
                  });
                }}
              />
            );
          case "완료":
            return (
              <SuccessMyPost
                onNext={() => {
                  handlePostCourseResult();
                  if (postId.length > 0) navigate(`/course-content/${postId}`);
                  // 생성된 페이지로 이동
                  else navigate("/"); // 홈으로 이동
                }}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
}
