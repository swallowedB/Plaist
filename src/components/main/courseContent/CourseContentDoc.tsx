import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import CourseBadge from "./CourseBadge";
import CourseLocationCards from "./locationCardArea/CourseLocationCards";
import CourseContentCommentArea from "./commentArea/courseContentCommentArea";

import {
  convertDateFormatt,
  convertTime,
  formatPrice,
  // splitBySpaceUntilIndex1,
} from "../../../utills/main/fomatter";
import ModifyButton from "../utils/ModifyButton";
import images from "../../../assets/images/importImages";

export default function CourseContentDoc({
  courseObj,
  likeCount,
  userId,
  onEditClicked,
  onDeleteClicked,
}: {
  courseObj: Course;
  likeCount: number;
  userId: string | undefined;
  onEditClicked: () => void;
  onDeleteClicked: () => void;
}) {
  const doc: Title = JSON.parse(courseObj.title);

  const [authorProfileImg, setAuthorProfileImg] = useState(
    images.course_user_profile_img
  );

  useEffect(() => {
    if (courseObj.author.image) setAuthorProfileImg(courseObj.author.image);
  }, [courseObj.author.image]);

  // 수정/삭제 버튼 표시 여부 결정
  const [isEditButtonsVisable, setEditButtonVisable] = useState<boolean>(false);
  useEffect(() => {
    if (userId && courseObj.author._id === userId) {
      setEditButtonVisable(true);
    } else {
      setEditButtonVisable(false);
    }
  }, [userId, courseObj.author._id]);

  console.log(doc.courseDescription)
  return (
    <div className="mb-20 font-pretendard text-custom-black">
      <div className="flex justify-between">
        <NavLink
          to={`/other-user-info/${courseObj.author._id}`}
          className="flex items-center gap-[11px] font-pretendard]"
        >
          <img
            src={authorProfileImg}
            alt="profile-image"
            className="w-10 h-10 rounded-full bg-primary-200"
          />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-primary-900">
              {courseObj.author.fullName}
            </p>
            <p className="text-xs text-custom-gray">
              {convertDateFormatt(courseObj.createdAt)}
            </p>
          </div>
        </NavLink>

        <div className={isEditButtonsVisable ? "inline-block" : "invisible"}>
          <div className="text-xs font-pretendard leading-[10px] flex gap-1 relative">
            <div className="absolute flex flex-row items-center right-[-11px] top-[16px]">
              <ModifyButton onClicked={onEditClicked}>수정</ModifyButton>
              <ModifyButton onClicked={onDeleteClicked}>삭제</ModifyButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[43px]">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold leading-8">
            {doc.courseTitle}
          </h1>

          <div className="flex items-center justify-center gap-1 mt-4">
            <img
              src={images.like_small_not_filled_icon}
              alt="좋아요 아이콘"
              className="h-[12px] w-[13px] "
            />
            <p className="font-regular text-[13px] leading-5">{likeCount}</p>
          </div>
        </div>

        <div className="mt-[25px] flex flex-col">
          <div className="font-medium leading-6 text-[15px] text-custom-gray mb-[18px]">
            <p className="w-[580px] whitespace-pre-wrap break-words">{doc.courseDescription}</p>
          </div>

          <div className="flex items-center justify-start mb-[10px]">
            <img
              src={images.location_icon}
              alt="장소 아이콘"
              className="w-[14.66px] h-4"
            />
            <p className="text-sm leading-5 font-regular text-custom-gray">
              {doc.locationObjs
                ? Array.from(
                    new Set(
                      doc.locationObjs?.map((item: LocationObj) => {
                        const locationArr = item.locationAddress.split(" ");
                        if (locationArr[0] === "서울특별시")
                          return `서울 ${locationArr[1]}`;
                        else return `${locationArr[0]} ${locationArr[1]}`;
                      }) || []
                    )
                  ).join(", ") || "주소"
                : "입력 없음"}
            </p>
          </div>
          <div className="flex gap-[14px] h-6 mb-5">
            <div className="flex items-center gap-[6px]">
              <img
                src={images.course_estimated_time_icon}
                alt="예상 이동 시간 아이콘"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[14px] text-primary-600 font-medium leading-[10px]">{`예상 시간: ${convertTime(
                doc.estimatedTime
              )}H`}</p>
            </div>

            <div className="flex items-center gap-[6px]">
              <img
                src={images.course_budget_icon}
                alt="예상 예산 아이콘"
                className="w-[14px] h-[14px]"
              />
              <p className="text-[14px] text-primary-600 font-medium leading-[10px]">{`예상 금액: ${formatPrice(
                doc.estimatedCost
              )}`}</p>
            </div>
          </div>
        </div>

        <div className="gap-x-[15px] gap-y-2 text-[14px] text-primary-500 font-medium flex flex-wrap">
          <CourseBadge target={doc.withWhom} />
          <CourseBadge target={doc.style} />
        </div>
      </div>

      <CourseLocationCards doc={doc} />
      <CourseContentCommentArea courseObj={courseObj} />
    </div>
  );
}
