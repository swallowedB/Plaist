interface CreateMyCourseFlowButtonProps {
  onNext: () => void;
  isCompleteThisPage: boolean;
  children: React.ReactNode;
}

export default function CreateMyCourseFlowButton({
  onNext,
  isCompleteThisPage,
  children,
}: CreateMyCourseFlowButtonProps) {
  return (
    <button
      onClick={onNext}
      disabled={!isCompleteThisPage}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white mb-[] ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      }`}
    >
      {children}
    </button>
  );
}
