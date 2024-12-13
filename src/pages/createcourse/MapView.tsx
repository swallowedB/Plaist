import images from "../../assets/images/importImages";
import PostingGuideTitle from "./../../components/createMyCourseMain/PostingGuideTitle";
import MapDisplay from "./../../components/createMyCourseMain/MapDisplay";
import SearchResultOfCreateMy from "./../../components/createMyCourseMain/SearchResultOfCreateMy";
import CreateMyCourseFlowButton from "../../components/createMyCourseMain/CreateMyCourseFlowButton";

import { useState } from "react";

export default function SelectCourseMain() {
  const [isCompleteThisPage, setisCompleteThisPage] = useState(true);
  
  return (
    <div>
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
        <MapDisplay />
        <SearchResultOfCreateMy/>

      </section>
    </div>
  );
}
