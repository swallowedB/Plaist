import { usePostStore } from "../../stores/postStore";
import PostingGuideTitle from "../../components/createMyCourseMain/PostingGuideTitle";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";
import { useCookie } from "../../hooks/useCookie";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function SelectTag({ onNext }: { onNext: OnNextInputTags }) {
  const isLoggedIn = useCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?page=my-course-builder/viewer");
    }
  }, []);

  const withWhomList = [
    "친구",
    "연인",
    "동료",
    "자녀",
    "지인",
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

  const withWhom = usePostStore((state) => state.withWhom);
  const setWithWhom = usePostStore((state) => state.setWithWhom);
  const deleteWithWhom = usePostStore((state) => state.deleteWithWhom);
  const style = usePostStore((state) => state.style);
  const setStyle = usePostStore((state) => state.setStyle);
  const deleteStyle = usePostStore((state) => state.deleteStyle);

  // 항목 클릭 핸들러
  const toggleSelection = (item: string, type: "style" | "withWhom") => {
    if (type === "style") {
      if (style.includes(item)) {
        // 선택 해제
        deleteStyle(item);
      } else {
        setStyle(item); // 선택 추가
      }
    } else if (type === "withWhom") {
      if (withWhom.includes(item)) {
        // 선택 해제
        deleteWithWhom(item);
      } else {
        setWithWhom(item); // 선택 추가
      }
    }
  };

  // '다음' 버튼 클릭 시 onNext 호출

  const handleNext: () => void = () => {
    onNext(withWhom, style); // 선택된 'withWhom'과 'style'을 onNext로 전달
  };

  return (
    <div className="mb-8">
      <PostingGuideTitle titleText="어떤 코스인가요?" mt={80} />
      <fieldset className="tag--withWhom mb-[80px] mt-[123px]">
        <legend className="font-pretendard text-[21px] font-semibold text-[#7D848D] mb-[10px] block">
          누구와
        </legend>
        <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[15px]">
          {withWhomList.map((item) => (
            <li
              key={item}
              className={`w-[94px] h-[45px] rounded-[30px] border-2 font-pretendard text-[16px] font-medium leading-[42px] text-center cursor-pointer ${
                withWhom.includes(item)
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-white text-primary-600 border-primary-600"
              }`}
              onClick={() => toggleSelection(item, "withWhom")}
            >
              {item}
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="tag--style">
        <legend className="font-pretendard text-[21px] font-semibold text-[#7D848D] mb-[10px] block">
          스타일
        </legend>
        <ul className="list-none p-0 m-0 w-[545px] flex flex-wrap gap-[15px]">
          {styleList.map((item) => (
            <li
              key={item}
              className={`w-[94px] h-[45px] rounded-[30px] border-2 font-pretendard text-[16px] font-medium leading-[42px] text-center cursor-pointer ${
                style.includes(item)
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-white text-primary-600 border-primary-600"
              }`}
              onClick={() => toggleSelection(item, "style")}
            >
              {item}
            </li>
          ))}
        </ul>
      </fieldset>
      <div className="flex justify-center items-center mt-[140px]">
        <CreateMyCourseFlowButton
          onNext={handleNext}
          isCompleteThisPage={Boolean(style.length && withWhom.length)}
        >
          다음
        </CreateMyCourseFlowButton>
      </div>
    </div>
  );
}
