import images from "../../assets/images/importImages";
import CreateMyCourseFlowButton from "../../components/createMyCourse/CreateMyCourseFlowButton";

export default function SuccessMyPost({ onNext }: SuccessMyPostProps) {
  const handleNext: () => void = () => {
    onNext();
  };
  return (
    <div>
      <section className="flex flex-col items-center justify-center mt-[70px] font-pretendard">
        <p className="text-[36px] mb-[15px]">🎉</p>
        <div className="text-[36px] font-bold text-primary-800 text-center mb-[13px]">
          <p className="mb-[-10px]">코스생성이</p>
          <p> 완료되었습니다</p>
        </div>

        <p className="text-[16px] text-custom-gray mb-[100px]">
          주변에 공유해서 베스트 코스러가 되어보세요
        </p>
        <figure className="mb-[100px] flex justify-center">
          <img
            src={images.big_logo_after_posting}
            alt="logo"
            className="w-[80%]"
          />
        </figure>
        <div className="flex flex-col items-center justify-center mb-[50px]">
          <CreateMyCourseFlowButton
            onNext={handleNext}
            isCompleteThisPage={true}
          >
            다양한 코스 구경하기
          </CreateMyCourseFlowButton>
        </div>
      </section>
    </div>
  );
}
