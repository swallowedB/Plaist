import images from "../../../../assets/images/importImages";

export default function CommentListItem() {
  return (
    <li className="flex items-center gap-3">
      <img
        src={images.course_user_profile_img}
        alt=""
        className="w-10 h-10 rounded-full bg-primary-200"
      />

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="text-[16px] font-bold text-primary-800">devboa</div>
          <p className="text-custom-gray text-[13px] font-regular">1일 전</p>
        </div>
        <p className="text-[14px] font-regular leading-5">댓글 내용</p>
      </div>
    </li>
  );
}
