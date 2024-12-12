import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";
import BlurGlassLayout from "./layouts/BlurGlassLayout";
import Category from "./pages/Category";
import CreateCourse from "./pages/CreateCourse";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthTest from "./pages/test/AuthTest";
import UserTest from "./pages/test/UserTest";
import SearchTest from "./pages/test/SearchTest";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import secureLocalStorage from "react-secure-storage";

export default function App() {
  const login = useAuthStore((state) => state.login);
  useEffect(() => {
    if (secureLocalStorage.getItem("token")) {
      login(secureLocalStorage.getItem("token"));
    }
  }, []);
  return (
    <Routes>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        {/* 블러 글레스 적용 페이지 */}
        <Route element={<BlurGlassLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        {/* Blur 적용하지 않은 페이지 */}
        <Route path="category" element={<Category />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
        </Route>

        <Route path="createCourse" element={<CreateCourse />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="userTest" element={<UserTest />} />
        <Route path="authTest" element={<AuthTest />} />
        <Route path="searchTest" element={<SearchTest />} />
      </Route>
    </Routes>
  );
}
