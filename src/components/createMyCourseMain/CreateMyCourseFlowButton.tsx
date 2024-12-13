import { useNavigate } from "react-router";
interface CreateMyCourseFlowButtonProps {
  to: string;
  isCompleteThisPage: boolean;
  children: React.ReactNode;
  additionalClassName?: string;
  disabled?: boolean;
}

export default function CreateMyCourseFlowButton({
  to,
  isCompleteThisPage,
  children,
  additionalClassName = "",
  disabled = false,
}: CreateMyCourseFlowButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => isCompleteThisPage && !disabled && navigate(to)}
      className={`w-[364px] h-[58px] rounded-[30px] border-primary-500 font-pretendard text-white ${
        isCompleteThisPage ? "bg-primary-500" : "bg-primary-300"
      } ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${additionalClassName}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
