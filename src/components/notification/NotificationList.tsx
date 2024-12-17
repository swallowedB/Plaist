import { useEffect, useState } from "react";
import { getCourseObj } from "../../api/postApi";
import { useNavigate } from "react-router-dom";
import { useNotificationStore } from "../../stores/notificationStore";

type NotificationType = "COMMENT" | "LIKE" | "FOLLOW" | "NULL";

export default function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications); // 상태 구독
  const fetchNotifications = useNotificationStore(
    (state) => state.fetchNotifications
  );
  const change2Seen = useNotificationStore((state) => state.change2Seen);

  const [courseTitles, setCourseTitles] = useState<{ [key: string]: string }>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        // 상태 업데이트
        fetchNotifications();
        console.log("Not", notifications);
        const titleMap: { [key: string]: string } = {};
        await Promise.all(
          useNotificationStore.getState().notifications.map(async (item) => {
            const post = (await getCourseObj(item.post)) as Course;
            if (post) {
              const titleData = JSON.parse(post.title);
              titleMap[item.post] = titleData.title.courseTitle;
            } else {
              titleMap[item.post] = "No title";
            }
          })
        );
        setCourseTitles(titleMap);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const clickNotification = async (
    notificationId: string,
    notificationType: NotificationType,
    postId: string
  ) => {
    try {
      await change2Seen(notificationId);
      if (notificationType === "COMMENT" || notificationType === "LIKE") {
        navigate(`/course-content/${postId}`);
      } else if (notificationType === "FOLLOW") {
        navigate(`/`);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  const checkNotificationType = (data: Notification): NotificationType => {
    if (data.follow) return "FOLLOW";
    else if (data.like) return "LIKE";
    else if (data.comment) return "COMMENT";
    return "NULL";
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div>
      {notifications.map((item) => {
        const notificationType = checkNotificationType(item);
        let notificationText = "";
        switch (notificationType) {
          case "LIKE":
            notificationText = `${item.author.fullName}님이 ${
              courseTitles[item.post] || "로딩 중..."
            } 포스트에 좋아요를 눌렀습니다.`;
            break;
          case "FOLLOW":
            notificationText = `${item.author.fullName}님이 회원님을 팔로우 합니다.`;
            break;
          case "COMMENT":
            notificationText = `${item.author.fullName}님이 ${
              courseTitles[item.post] || "로딩 중..."
            } 포스트에 댓글을 남겼습니다.`;
            break;
          default:
            notificationText = `알림을 확인할 수 없습니다.`;
        }

        return (
          <div
            key={item._id}
            className="w-[528px] h-[64px] flex items-center p-4 rounded-[15px] text-base text-custom-black bg-white shadow-default m-[10px]"
            onClick={() =>
              clickNotification(item._id, notificationType, item.post)
            }
          >
            <div className="flex flex-row items-center">
              <div className="w-[30px] h-[30px] bg-custom-gray rounded-full mr-3" />
              <p className="font-medium text-custom-black">
                {notificationText}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
