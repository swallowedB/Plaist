import images from "../../assets/images/importImages";
import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";

export default function MyCourseCards() {
  // 여기에 내 코스만 필터되도록 넣어놓으셈
  // 내 코스만 필터된 것에서 서치바 검색이 감지되면 mycourse가 저장된 것(메모이제이션 사용)에서 다시 필터
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
