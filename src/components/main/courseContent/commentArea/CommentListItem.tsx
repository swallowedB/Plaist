import { NavLink } from "react-router";

export default function CommentListItem({
  userName,
  userId,
  createdAt,
  comment,
}: ICommentListItemProps) {
  return (
    <li className="flex items-center gap-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <NavLink
            to={`/other-user-info/${userId}`}
            className="flex items-center gap-[11px] font-pretendard"
          >
            <div className="text-[16px] font-bold text-primary-800 leading-5">
              {userName}
            </div>
          </NavLink>
          <p className="text-custom-gray text-[13px] font-regular leading-5">
            {createdAt}
          </p>
        </div>
        <p className="text-[14px] font-regular leading-5 text-custom-black">{comment}</p>
      </div>
    </li>
  );
}
