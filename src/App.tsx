import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./layouts/utils/ScrollToTop";
import Router from "./Router";
import { useEffect, useState } from "react";

import { getUserIdFromToken } from "./api/userApi";
import { startExpirationCheck } from "./utills/Auth/setCookie";
import { useNavigate } from "react-router";

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
      startExpirationCheck("token", 0.5, navigate);
    }
  }, [userId]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScrollToTop />
      <Router />
      <ToastContainer />
    </QueryClientProvider>
  );
}
