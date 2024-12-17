import { useFunnel, UseFunnelResults } from "@use-funnel/next";
import images from "../../assets/images/importImages";
import SelectTag from "./SelectTag";
import SelectCourseMain from "./SelectCourseMain";
import ExplainCourse from "./ExpainCourse";
import SucessMyPost from "./SucessMyPost";
import Mapview from "./MapView";
import {
  InputTags,
  InputCourseDetails,
  InputLocation,
  InputExplaination,
} from "./postingcontext";

// T 타입 정의

export default function CreateMyCourse() {
  type T = {
    InputTags: InputTags;
    InputCourseDetails: InputCourseDetails;
    InputLocation: InputLocation;
    InputExplaination: InputExplaination;
  };

  const funnel: UseFunnelResults<T> = useFunnel<T>({
    id: "my-funnel-app",
    steps: {},
    initial: {
      step: "InputTags", // 초기 단계를 'InputTags'로 설정
      context: {
        withWhom: [],
        styles: [],
      },
    },
  } satisfies UseFunnelOptions<T>);

  // 진행 상태에 따른 이미지를 가져오는 함수
  const getProgressBarImage = (step: string) => {
    const stepNumber = {
      InputTags: 1,
      InputCourseDetails: 2,
      InputLocation: 2,
      InputExplaination: 3,
      SucessPost: 4,
    }[step];

    return images[`progress_bar${stepNumber}`];
  };

  return (
    <div className="mt-[95px] max-w-[767px] mb-8 flex flex-col items-center">
      <aside>
        <figure>
          <img
            src={getProgressBarImage(funnel.state.step)}
            alt="Progress bar"
          />
        </figure>
      </aside>

      <funnel.Render
        InputTags={({ history }) => (
          <SelectTag
            onNext={(withWhom, styles) =>
              history.push("InputCourseDetails", { withWhom, styles })
            }
          />
        )}
        InputCourseDetails={({ context, history }) => (
          <SelectCourseMain
            locationObjs={context.locationObjs}
            estimatedTime={context.estimatedTime}
            estimatedCost={context.estimatedCost}
            onPlus={(estimatedTime, estimatedCost, locationObjs) => {
              history.push("InputLocation", {
                locationObjs,
                estimatedTime,
                estimatedCost,
              });
            }}
            onNext={(estimatedTime, estimatedCost, locationObjs, channelId) => {
              history.push("InputExplaination", {
                locationObjs,
                estimatedTime,
                estimatedCost,
                channelId,
              });
            }}
            onBack={funnel.history.back}
          />
        )}
        InputLocation={({ context, history }) => (
          <Mapview
            onNext={(location) => {
              const updatedLocationObjs = [
                ...(context.locationObjs || []),
                location,
              ];
              history.push("InputCourseDetails", {
                locationObjs: updatedLocationObjs,
              });
            }}
            onBack={funnel.history.back}
          />
        )}
        InputExplaination={({ context, history }) => (
          <ExplainCourse
            withWhom={context.withWhom}
            styles={context.styles}
            locationObjs={context.locationObjs}
            onNext={(courseTitle, courseDescription, image) =>
              history.push("SucessPost", {
                courseTitle,
                courseDescription,
                image,
              })
            }
            onBack={funnel.history.back}
          />
        )}
        SucessPost={() => (
          <SucessMyPost
            onNext={() => {
              const navigate = useNavigate();
              navigate("/"); // 홈으로 이동
            }}
          />
        )}
      />
    </div>
  );
}
