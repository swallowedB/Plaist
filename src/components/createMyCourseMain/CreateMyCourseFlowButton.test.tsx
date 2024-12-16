import { useNavigate } from "react-router";

interface CreateMyCourseFlowButtonProps {
  to?: string; // 이동할 경로
  isCompleteThisPage?: boolean; // 현재 페이지 완료 여부
  isLastStep?: boolean; // 마지막 단계 여부
  children: React.ReactNode; // 버튼 내용
  additionalClassName?: string; // 추가 클래스
  disabled?: boolean; // 버튼 비활성화 여부
}

export default function CreateMyCourseFlowButton({
  to,
  isCompleteThisPage = false,
  isLastStep = false, // 기본값 설정
  children,
  additionalClassName = "",
  disabled = false,
}: CreateMyCourseFlowButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        if (isCompleteThisPage && !disabled) {
          if (isLastStep) {
            // 마지막 단계인 경우 홈으로 이동
            navigate("/");
          } else if (to) {
            // to가 명시된 경우 해당 경로로 이동
            navigate(to);
          }
        }
      }}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      } ${disabled ? "cursor-not-allowed opacity-50" : ""} ${additionalClassName}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
