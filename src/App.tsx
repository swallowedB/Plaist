import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./Router";
import { getUserIdFromToken } from "./api/userApi";
import ScrollToTop from "./layouts/utils/ScrollToTop";
import { startExpirationCheck } from "./utills/Auth/setCookie";

export default function App() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const queryClient = new QueryClient();

  useEffect(() => {
    const currentUserId = getUserIdFromToken();
    setUserId(currentUserId);
  }, []);

  useEffect(() => {
    if (userId) {
      startExpirationCheck("token", 60, navigate);
    }
  }, [userId]);

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Router />
      <ToastContainer />
    </QueryClientProvider>
  );
}
