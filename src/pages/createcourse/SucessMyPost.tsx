import images from "../../assets/images/importImages";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

export default function ExplainCourse() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center mt-[99px] font-pretendard">
        <p className="text-[36px] mb-[50px]">🎉</p>
        <h1 className="text-[36px] leading-0 font-bold text-primary-800 text-center mb-[13px]">
          코스생성이 <br />
          완료되었습니다
        </h1>
        <p className="text-[16px] text-custom-gray mb-[100px]">
          주변에 공유해서 베스트 코스러가 되어보세요
        </p>
        <figure className="mb-[194px]">
          <img src={images.big_logo_after_posting} alt="logo" />
        </figure>
        <div className="flex flex-col items-center justify-center mb-[100px]">
          <CreateMyCourseFlowButton
            isCompleteThisPage={true}
            isLastStep={true} // 마지막 단계인지?
            currentStep="step4" // 현재 단계
          >
            다양한 코스 구경하기
          </CreateMyCourseFlowButton>
        </div>
      </section>
    </div>
  );
}
