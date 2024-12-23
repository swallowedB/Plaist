import { twMerge } from "tailwind-merge";

import CourseLocationCardItem from "./CourseLocationCardItem";

import styles from "../../../../components/createMyCourse/SelectCourseMain.module.css";

export default function CourseLocationCards({ doc }: { doc: Title }) {
  return (
    <div
      className={twMerge(
        styles.courseLocationCardsContainer,
        "mx-[45px] mt-[60px] mb-[97px] flex flex-col gap-10 ml-[5px]"
      )}
    >
      {doc.locationObjs.map((locationItem: LocationObj, idx: number) => {
        return (
          <CourseLocationCardItem
            key={idx}
            locationName={locationItem.locationName}
            locationAddress={locationItem.locationAddress}
            locationPhoneNum={locationItem.locationPhoneNum}
            locationCategory={locationItem.locationCategory}
          />
        );
      })}
    </div>
  );
}
