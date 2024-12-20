import { create } from "zustand";
import { getNotification, seenNotification } from "../api/notificationApi";


let polling = false;

interface NotificationState {
  notifications: Notification[];
  clickedNotifications: Set<string>;
  isIconActivated: boolean;
}

interface NotificationAction {
  fetchNotifications: () => void;
  change2Seen: (notificationId: string) => void;
  deleteAll: () => void;
  startLongPolling: () => void;
  stopLongPolling: () => void;
  setIconActivated: (vale: boolean) => void;
}

export const useNotificationStore = create<
  NotificationAction & NotificationState
>((set) => ({
  notifications: [],
  // 초기 로드시 클릭된 데이터 가져오기
  clickedNotifications: new Set<string>(
    JSON.parse(localStorage.getItem("clickedNotifications") || "[]")
  ),
  isIconActivated: false,
  fetchNotifications: async () => {
    const { setIconActivated, notifications, clickedNotifications } =
      useNotificationStore.getState();
    const prevNotification = [...notifications];
    try {
      const data = await getNotification();
      const result = data.filter(
        (item) => !item.seen && !clickedNotifications.has(item._id)
      );
      if (JSON.stringify(prevNotification) != JSON.stringify(result)) {
        console.log("prev", prevNotification);
        console.log("curr", result);
        if (result.length === 0) setIconActivated(false);
        else {
          setIconActivated(true);
        }
        useNotificationStore.setState({ notifications: result });
      }
      // console.log("after change2Seen", notifications);
    } catch (error) {
      console.error(error);
    }
  },

  change2Seen: async (notificationId) => {
    set((state) => {
      const updatedSet = new Set(state.clickedNotifications);
      updatedSet.add(notificationId);
      localStorage.setItem(
        "clickedNotifications",
        JSON.stringify(Array.from(updatedSet))
      );
      return { clickedNotifications: updatedSet };
    });
  },

  deleteAll: async () => {
    try {
      await seenNotification();
      console.log("All notifications marked as seen.");
    } catch {
      console.log("No items to delete.");
    }
    localStorage.removeItem("clickedNotifications");
    set({ notifications: [], isIconActivated: false });
  },

  setIconActivated: (value) => {
    set({ isIconActivated: value });
  },

  startLongPolling: async () => {
    const { fetchNotifications } = useNotificationStore.getState();

    polling = true;
    const pollingNotifications = async () => {
      while (true) {
        if (!polling) {
          console.log("Polling stopped");
          break; // polling이 false가 되면 루프 종료
        }
        try {
          await fetchNotifications();
          console.log("polling");
        } catch (error) {
          console.error("Long Polling 중 오류 발생", error);
        }
        const IDLE_TIME = 5 * 1000;
        await new Promise((resolve) => setTimeout(resolve, IDLE_TIME));
      }
    };
    pollingNotifications();
  },
  stopLongPolling: () => {
    const { setIconActivated } = useNotificationStore.getState();
    if (polling) {
      polling = false; // polling 중단
      setIconActivated(false);
      console.log("Polling stopped by stopLongPolling");
    }
  },
}));
