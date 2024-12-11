import images from "../../../assets/images/importImages";
import BestCourseCardItem from "./BestCourseCardItem";

export default function BestCourseCards() {
  return (
    <div className="flex gap-5">
      <BestCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <BestCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <BestCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
    </div>
  );
}
