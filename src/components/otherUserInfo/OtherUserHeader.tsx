import basicImage from "../../assets/images/exProfileImg.svg";

export default function OtherUserHeader({
  profileImg,
  userName,
  userEmail,
}: {
  profileImg: string;
  userName: string;
  userEmail: string;
}) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${profileImg || basicImage})` }}
        className="w-[96px] h-[96px] bg-[#f3d0d9] rounded-full shadow-backblue overflow-hidden bg-cover bg-center"
      />
      <p className="text-primary-700 text-[24px] font-bold font-pretendard mt-[8px]">
        {userName}
      </p>
      <p className="text-primary-600 text-[14px] font-regular font-pretendard">
        {userEmail}
      </p>
    </>
  );
}
