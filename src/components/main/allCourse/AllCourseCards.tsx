import AllCourseCardItem from "./AllCourseCardItem";

export default function AllCourseCards({
  courseList,
}: {
  courseList: Course[];
}) {
  return (
    <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px] ">
      {courseList.map((courseItem: Course, idx: number) => {
        return <AllCourseCardItem key={idx} courseItem={courseItem} />;
      })}
    </div>
  );
}
