import { useState } from "react";
import images from "../../assets/images/importImages";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";

export default function StartCourse() {
  const [isCompletedThisPage, setisCompletedThisPage] = useState(true);
  const withWhomList = [
    "친구",
    "연인",
    "동료",
    "자녀",
    "자연",
    "후배",
    "고객",
    "동호회",
  ];
  const styleList = [
    "소개팅",
    "기념일",
    "생일",
    "데이트",
    "크리스마스",
    "축하 파티",
    "단체 모임",
    "회식",
    "편안함",
    "로맨틱",
    "힙한",
    "가벼운",
    "신나는",
  ];
  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={images.progress_bar1} alt="Progress bar-select-course" />
        </figure>
      </aside>
      <PostingGuideTitle titleText="어떤 코스 인가요?" mt={80} />
      <fieldset className="tag--withWhom mt-[120px] mb-[80px]">
        <legend className="font-pretendard text-[21px] font-semibold text-[#7D848D] mb-[10px] block">
          누구와
        </legend>
        <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[15px]">
          {withWhomList.map((item) => {
            return (
              <li className="w-[94px] h-[45px] rounded-[30px] border-2 border-[#306EB5] font-pretendard text-[16px] font-medium leading-[42px] text-center">
                {item}
              </li>
            );
          })}
        </ul>
      </fieldset>
      {/*  mb-[140px] */}
      <fieldset className="tag--style">
        <legend className="font-pretendard text-[21px] font-semibold text-[#7D848D] mb-[10px] block">
          스타일
        </legend>
        <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[15px]">
          {styleList.map((item) => {
            return (
              <li className="w-[94px] h-[45px] rounded-[30px] border-2 border-[#306EB5] font-pretendard text-[16px] font-medium leading-[42px] text-center">
                {item}
              </li>
            );
          })}
        </ul>
      </fieldset>
      <div className="flex flex-col items-center justify-center mb-[100px] mt-[146px]">
        <CreateMyCourseFlowButton
          to="/create-course/flow2-select-course"
          isCompleteThisPage={isCompletedThisPage}
        >
          다음
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
