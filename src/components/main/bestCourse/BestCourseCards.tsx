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
        contentId={"10"}
      />
      <BestCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
        contentId={"20"}
      />
      <BestCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
        contentId={"30"}
      />
    </div>
  );
}
