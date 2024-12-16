import images from "../../assets/images/importImages";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/flow2/mapview/MapDisplay";

export default function SelectCourseMain() {
  const goToTop = () => {
    const mapElement = document.getElementById("top");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="top">
      <aside>
        <figure>
          <img src={images.progress_bar2} alt="Progress bar-select-course2" />
        </figure>
      </aside>
      <section>
        <PostingGuideTitle
          alignClass="flex justify-center"
          titleText="첫번째 코스를 선택"
          mt={80}
        />
        <MapDisplay goToTop={goToTop} />
      </section>
    </div>
  );
}
