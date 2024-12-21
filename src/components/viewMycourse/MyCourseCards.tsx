import AllCourseCardItem from "../main/allCourse/AllCourseCardItem";

export default function MyCourseCards({
  courseList,
}: {
  courseList: Course[];
}) {
  return (
    <>
      <div className="mb-28 ">
        {courseList.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-[17px] gap-y-[36px]">
            {courseList.map((courseItem: Course) => (
              <AllCourseCardItem key={courseItem._id} courseItem={courseItem} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center font-pretendard text-white text-[18px] font-semiBold h-[100px]">
            <p>나만의 코스가 아직 없습니다</p>
          </div>
        )}
      </div>
    </>
  );
}
