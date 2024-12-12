import images from "../../assets/images/importImages";
import CreateNewMy from "../../components/createMyCourseMain/CreatNewCoursebox";
import CreatedCoursebox from "./../../components/createMyCourseMain/CreatedCoursebox";

export default function MapView() {
  return (
    <div>
      <aside>
        <figure>
          {/* 이미지 렌더링 */}
          <img src={images.progress_bar2} alt="Progress bar-select-course" />
        </figure>
      </aside>
      <section>
        <CreateNewMy />
        <CreatedCoursebox />
      </section>
      {/* 단계 변경 버튼 예시 */}
      <button>다음</button>
    </div>
  );
}
