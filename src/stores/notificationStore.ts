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
  clickedNotifications: new Set<string>(),
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
