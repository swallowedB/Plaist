import { create } from "zustand";
import { getNotification, seenNotification } from "../api/notificationApi";

let polling = false;

interface NotificationState {
  notifications: Notification[];
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
  isIconActivated: false,
  fetchNotifications: async () => {
    const { setIconActivated } = useNotificationStore.getState();
    try {
      const data = await getNotification();
      const result = data.filter((item) => !item.seen);
      console.log(result);
      if (result.length === 0) setIconActivated(false);
      else {
        setIconActivated(true);
      }
      set({ notifications: result });
    } catch (error) {
      console.error(error);
    }
  },

  change2Seen: async (notificationId) => {
    const { notifications } = useNotificationStore.getState();
    try {
      await seenNotification(notificationId);
      // list 업데이트
      const result = notifications.filter((item) => item._id != notificationId);
      set({ notifications: result });
    } catch (error) {
      console.error("Error marking notifications as seen:", error);
    }
  },
  deleteAll: async () => {
    const { notifications, change2Seen } = useNotificationStore.getState();
    try {
      await Promise.all(
        notifications.map(async (item) => {
          await change2Seen(item._id); // 비동기 상태 업데이트
        })
      );
      console.log("All notifications marked as seen.");
    } catch {
      console.log("No items to delete.");
    }
    set({ notifications: [] });
  },
  setIconActivated: (value) => {
    set({ isIconActivated: value });
  },

  startLongPolling: async () => {
    const { fetchNotifications } = useNotificationStore.getState();

    polling = true;
    const pollingNotifications = async () => {
      while (polling) {
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
    polling = false;
    setIconActivated(false);
  },
}));
