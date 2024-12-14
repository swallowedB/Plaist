import { useEffect, useState } from "react";
import { getNotification } from "../api/api";
import "../css/blur.css";

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
    <div className="relative font-pretendard inset-0 flex flex-col items-center">
      <div className="absolute blur-bg-center"/>
      <div className={`
        absolute z-30 w-[647px] bg-white/25 rounded-[25px] shadow-default flex flex-col
        mt-[115px] h-full border-2 border-white
        `}>

        {/* 창 안의 컨텐츠 */}  
        <div className="flex flex-col px-[53px]">

          {/* 타이틀 및 삭제 버튼 */}
          <header className="flex flex-row items-center justify-between mt-[95px]">
            <p className="text-[36px] font-bold text-primary-700">
              알림
            </p>
            <button className="text-[14px] font-medium text-primary-700 hover:text-primary-500">
              모두 삭제
            </button>
          </header>

          {/* 알림 리스트 */}
          <div className="flex flex-col space-y-4 max-h-[700px] overflow-y-scroll hide-scrollbar">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="w-[647px] h-[64px] flex items-center p-4 rounded-[15px] text-base text-custom-black bg-white shadow-default"
              >
                {/* 알림 창 컨텐츠 */}
                <div className="flex flex-row items-center w-[502px]">
                  <div className="w-[30px] h-[30px] bg-custom-gray rounded-full mr-3"/>
                  <p className="w-[457px] h-[24px] font-medium text-custom-black">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
