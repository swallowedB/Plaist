import { useNavigate } from "react-router";

interface CreateMyCourseFlowButtonProps {
  to: string; // 이동할 경로
  isCompleteThisPage: boolean; // 페이지 완료 여부에 따라 스타일 변경
  children: React.ReactNode; // 버튼 안에 들어갈 텍스트 또는 추가 요소
}

export default function CreateMyCourseFlowButton({
  to,
  isCompleteThisPage,
  children,
}: CreateMyCourseFlowButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => isCompleteThisPage && navigate(to)}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      }`}
    >
      {children}
    </button>
  );
}
