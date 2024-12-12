import images from "../../../assets/images/importImages";
import AllCourseCardItem from "./AllCourseCardItem";

export default function AllCourseCards() {
  return (
    <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
      <AllCourseCardItem
        contentId={1} // API 응답에서 고유 id값을 받아 입력
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        contentId={2}
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        contentId={3}
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
      <AllCourseCardItem
        contentId={4}
        title={"✨ 2025 새해 모임"}
        rating={4.7}
        location={"Seoul, GangNam"}
        imageUrl={images.course_img}
      />
    </div>
  );
}
