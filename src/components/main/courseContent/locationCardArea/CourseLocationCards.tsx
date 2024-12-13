import images from "../../../../assets/images/importImages";
import CourseLocationCardItem from "./CourseLocationCardItem";

export default function CourseLocationCards() {
  return (
    <div className="mx-[45px] mt-[60px] mb-[97px] flex flex-col gap-10">
      <CourseLocationCardItem
        title={`명륜진사갈비 서울자양점`}
        rating={433}
        location={`서울특별시 광진구 뚝섬로 503 1층`}
        imageUrl={images.course_img}
        contentId={`100`}
        contact={`02-1111-1111`}
        category={`음식점`}
      />
      <CourseLocationCardItem
        title={`서울숲공원`}
        rating={4423}
        location={`서울특별시 광진구 뚝섬로 503 1층`}
        imageUrl={images.course_img}
        contentId={`200`}
        contact={`02-1111-1111`}
        category={`공원`}
      />
      <CourseLocationCardItem
        title={`다이닝 목로 성수점`}
        rating={75}
        location={`서울특별시 성동구 연무장7가길 1 1층`}
        imageUrl={images.course_img}
        contentId={`300`}
        contact={`02-1111-1111`}
        category={`주점`}
      />
    </div>
  );
}
