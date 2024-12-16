import CourseLocationCardItem from "./CourseLocationCardItem";
import styles from "../../../../pages/createcourse/CourseEditor.module.css";
import { twMerge } from "tailwind-merge";

export default function CourseLocationCards({ doc }: { doc: Title }) {
  return (
    <div
      className={twMerge(
        styles.courseLocationCardsContainer,
        "mx-[45px] mt-[60px] mb-[97px] flex flex-col gap-10 ml-[5px]"
      )}
    >
      {doc.locationObjs.map((locationItem, idx) => {
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
