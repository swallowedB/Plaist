import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/index.css";
import { getUserById } from "../api/userApi";
import defaultImage from "../assets/images/default.png";
import OtherUserHeader from "../components/otherUserInfo/OtherUserHeader";
import OtherUserCourse from "../components/otherUserInfo/OtherUserCourse";

interface User {
  _id: string;
  fullName: string;
  email: string;
  image: string;
  posts: Course[];
}

interface Course {
  _id: string;
  title: string;
  image: string;
  likes: any[];
  channel: string | { _id: string };
}

interface LocationObj {
  locationAddress: string;
}

interface Title {
  courseTitle: string;
  courseDescription: string;
  locationObjs: LocationObj[];
}

interface CardData {
  id: string;
  courseTitle: string;
  courseDescription: string;
  likes: number;
  locationAddress: string;
  image: string;
}

const OtherUserInfo: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        navigate("/404");
        return;
      }

      try {
        const userData = await getUserById(userId);
        setUserInfo(userData);

        const cardMap = new Map<string, CardData>();
        const ALL_CHANNEL_ID = "675e6ed26ada400ee6bec120";

        userData.posts.forEach((post: Course) => {
          const titleData: Title = JSON.parse(post.title || "{}");
          const location =
            Array.from(
              new Set(
                titleData.locationObjs?.map((item: LocationObj) => {
                  const locationArr = item.locationAddress?.split(" ") || [];
                  return locationArr[0] === "서울특별시"
                    ? `서울 ${locationArr[1]}`
                    : `${locationArr[0]} ${locationArr[1]}`;
                }) || []
              )
            ).join(", ") || "주소";

          const result: CardData = {
            id: post._id || "",
            courseTitle: titleData.courseTitle || "제목",
            courseDescription: titleData.courseDescription || "",
            likes: post.likes?.length || 0,
            locationAddress: location,
            image: post.image || defaultImage,
          };

          const uniqueKey = JSON.stringify(result.courseTitle);
          const postChannel =
            typeof post.channel === "string" ? post.channel : post.channel._id;

          if (!cardMap.has(uniqueKey) && postChannel === ALL_CHANNEL_ID) {
            cardMap.set(uniqueKey, result);
          }
        });

        setCardsData(Array.from(cardMap.values()));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setCardsData([]);
      }
    };

    fetchData();
  }, [userId, navigate]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex flex-col items-center min-h-[1000px] mx-auto mb-[200px]">
      <div className="absolute blur-bg-center z-[-10]" />
      <div className={`absolute top-[117px] pb-[150px]`}>
        <div
          className={`flex flex-col items-center w-[647px] h-full bg-primary-300/15 rounded-[25px] 
          border-2 border-white z-10 shadow-default py-20 min-h-[960px]`}
        >
          <div className="relative flex flex-col items-center mt-[35px] h-full w-[555px]">
            <OtherUserHeader
              profileImg={userInfo.image}
              userName={userInfo.fullName}
              userEmail={userInfo.email}
            />
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center gap-3 mt-[35px] relative">
                <div
                  className={`absolute z-10 bg-white/70 rounded-[17px] w-[88px] h-[33px]`}
                />
                <div
                  className={`rounded-[17px] w-[88px] h-[33px] flex items-center justify-center z-20`}
                >
                  <p
                    className={`font-pretendard font-semiBold text-[16px] text-primary-700`}
                  >
                    코스 목록
                  </p>
                </div>
              </div>
            </div>
            {cardsData.length > 0 ? (
              <OtherUserCourse targetUserData={cardsData} />
            ) : (
              <p>No courses available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherUserInfo;
