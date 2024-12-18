export default function CommentListItem({
  userName,
  createdAt,
  comment,
}: ICommentListItemProps) {
  return (
    <li className="flex items-center gap-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="text-[16px] font-bold text-primary-800">
            {userName}
          </div>
          <p className="text-custom-gray text-[13px] font-regular">
            {createdAt}
          </p>
        </div>
        <p className="text-[14px] font-regular leading-5">{comment}</p>
      </div>
    </li>
  );
}
