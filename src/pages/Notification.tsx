import "../css/blur.css";
import NotificationList from "../components/notification/NotificationList";
import { useNotificationStore } from "../stores/notificationStore";
import { useCookie } from "../hooks/useCookie";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Notification = () => {
  const deleteAll = useNotificationStore((state) => state.deleteAll);
  const isLoggedIn = useCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?page=notification");
    }
  }, []);

  return (
    <div className="relative font-pretendard flex flex-col items-center">
      <div className="absolute blur-bg-center h-[100vh]" /* 필요하면 조정 */ />
      <div
        className={`
        mt-[100px] absolute z-30 w-[647px] bg-white/25 rounded-[25px] shadow-default flex flex-col min-h-[75vh] mb-[100px] border-2 border-white
        `}
      >
        {/* 창 안의 컨텐츠 */}
        <div className="flex flex-col pl-[53px]">
          {/* 타이틀 및 삭제 버튼 */}
          <header className="flex flex-row items-center justify-between mt-[95px] pr-[53px]">
            <p className="text-[36px] font-bold text-primary-700">알림</p>
            <p
              className="text-[14px] font-medium text-primary-700 hover:text-primary-500 block"
              role="button"
              onClick={() => deleteAll()} // 모두 삭제 버튼 클릭
            >
              모두 삭제
            </p>
          </header>

          {/* 알림 리스트 */}
          <div className="mt-[15px] mb-[30px] flex flex-col space-y-4 h-[60vh] max-w-[100%] mr-[10px] overflow-y-auto hide-scrollbar">
            <NotificationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
