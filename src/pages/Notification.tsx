import { useEffect, useState } from "react";
import { getNotification } from "../api/api";

export interface NotificationItem {
  id: number;
  message: string;
}
const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotification();
        setNotifications(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  if (loading) {
    return (
      <div className="font-pretendard">
        <p>로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="font-pretendard">
        <p>에러 발생: {error}</p>
      </div>
    );
  }

  return (
    <div className="font-pretendard absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto w-[647px] h-auto p-8 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-lg flex flex-col">
        <div className="sticky top-0 bg-opacity-80 backdrop-blur-md z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-primary-700 mt-[95px] mb-[55px]">
              알림
            </h2>
            <button className="text-xs text-primary-700 hover:underline">
              모두 삭제
            </button>
          </div>
          {/* 알림 리스트 */}
          <div className="flex flex-col space-y-4 max-h-[700px] overflow-y-scroll hide-scrollbar">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="w-full h-[64px] flex items-center p-4 rounded-2xl text-sm text-custom-black bg-custom-input shadow-lg"
              >
                {/* 프로필 이미지 */}
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                <span>{item.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
