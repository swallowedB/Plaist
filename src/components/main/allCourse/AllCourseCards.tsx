import images from "../../../assets/images/importImages";
import AllCourseCardItem from "./AllCourseCardItem";

export default function AllCourseCards() {
  return (
    <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
      <AllCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
    </div>
  );
}
