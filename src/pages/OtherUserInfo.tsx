import "../css/index.css";
import { useParams } from "react-router";
import { getUserById } from "../api/userApi";
import OtherUserHeader from "../components/otherUserInfo/OtherUserHeader";
import { useEffect, useState } from "react";
import OtherUserCourse from "../components/otherUserInfo/OtherUserCourse";

// test Page : http://localhost:5173/other-user-info/675fd765c8bfa141c295e5c1

type PostData = {
  id: string;
  courseTitle: string;
  courseDescription: string;
  locationName: string;
  likes: number;
  image: string;
};

export default function OtherUserInfo() {
  const { userId } = useParams();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [cardsData, setCardsData] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(`${userId}`);
        setUserInfo(userData);

        if (Array.isArray(userData?.posts)) {
          const data = userData.posts.map((post: Post) => {
            const titleData: Title = JSON.parse(post?.title || "{}");
            const location =
              titleData.locationObjs
                ?.map((item) => {
                  const locationArr = item.locationAddress.split(" ");
                  if (locationArr[0] === "서울특별시")
                    return `${locationArr[0]} ${locationArr[1]}`;
                  else return `${locationArr[0]}`;
                })
                .join(", ") || "주소";

            return {
              id: post?._id || "",
              courseTitle: titleData.courseTitle || "제목",
              courseDescription: titleData.courseDescription || "",
              likes: post?.likes?.length || 0,
              locationName: location,
              image: post.image,
            } as PostData;
          });

          setCardsData(
            data.filter((item: PostData): item is PostData => item !== null)
          );
        } else {
          console.warn("Posts is not an array or undefined:", userData?.posts);
          setCardsData([]);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setCardsData([]);
      }
    };

    fetchData();
  }, []);

  if (userInfo) {
    return (
      <>
        <div className="relative w-[767px] flex flex-col items-center h-screen mx-auto">
          {/* blur blue */}
          <div className="absolute blur-bg-center" />

          {/* glass 창 */}
          <div className={`absolute z-[100]`}>
            <div
              className={`flex flex-col items-center w-[647px] h-full bg-primary-300/15 rounded-t-[25px] 
                      border-2 border-white z-10 shadow-default py-20 min-h-[960px] `}
            >
              {/* 창 안의 요소 */}
              <div className="relative flex flex-col items-center mt-[35px] h-full w-[555px]">
                {/* 프로필 요소 */}
                <OtherUserHeader
                  profileImg={userInfo.coverImage}
                  userName={userInfo.fullName}
                  userEmail={userInfo.email}
                />
                <div className="flex flex-col items-center">
                  {/* 탭 영역 */}
                  <div className="flex flex-row items-center gap-3 mt-[35px] relative">
                    {/* 클릭 시 이동할 배경요소 */}
                    <div
                      className={`absolute z-10 bg-white/70 rounded-[17px] w-[88px] h-[33px]`}
                    />
                    <div
                      className={`hover:cursor-pointer rounded-[17px] w-[88px] h-[33px] flex items-center justify-center z-20`}
                    >
                      <p
                        className={`font-pretendard font-semiBold text-[16px] text-primary-700`}
                      >
                        코스 목록
                      </p>
                    </div>
                  </div>
                </div>
                {/* 마이페이지 - 카테고리 탭 */}
                {cardsData.length > 0 ? (
                  <OtherUserCourse targetUserData={cardsData} />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null; // 로딩 상태나 404 페이지 추가 가능
}