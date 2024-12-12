import { NavLink } from "react-router";
import images from "../../assets/images/importImages";

export default function StartCourse() {
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
      <h1 className="font-pretendard text-[36px] font-bold mt-[80px] mb-[120px]">
        어떤 코스 인가요?
      </h1>

      <fieldset className="tag--withWhom mb-[80px]">
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
      <nav className="w-[364px] h-[58px] leading-[55px] font-pretendard font-semibold rounded-[30px] bg-[#8AB8EE] text-center text-white">
        <NavLink to="../flow2-select-course">다음</NavLink>
      </nav>
    </div>
  );
}
