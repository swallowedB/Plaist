import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";
import BlurGlassLayout from "./layouts/LoginLayout";
import Category from "./pages/Category";

import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthTest from "./pages/test/AuthTest";
import ChannelTest from "./pages/test/ChannelTest";
import UserTest from "./pages/test/UserTest";
import SearchTest from "./pages/test/SearchTest";
import MainLayout from "./layouts/MainLayout";

import CreateCourseLayout from "./layouts/CreateCourseLayout";
import ViewMycourse from "./pages/createcourse/ViewMycourse";
import SelectStyle from "./pages/createcourse/SelectStyle";
import SelectCourseMain from "./pages/createcourse/SelectCourseMain";
import MapView from "./pages/createcourse/MapView";
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

        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route element={<CreateCourseLayout />}>
          {/* create-course 경로 */}
          <Route path="create-course">
            {/* view-my-course 경로 */}
            <Route path="view-my-course" element={<ViewMycourse />} />

            {/* create-my-course 하위 경로 */}
            <Route path="flow1-select-style" element={<SelectStyle />} />
            <Route path="flow2-select-course">
              <Route path="" element={<SelectCourseMain />} />
              <Route path="map-view" element={<MapView />} />
            </Route>
          </Route>
        </Route>

        <Route path="my-page" element={<MyPage />} />
        <Route path="category" element={<Category />} />

        <Route path="channelTest" element={<ChannelTest />} />
        <Route path="userTest" element={<UserTest />} />
        <Route path="authTest" element={<AuthTest />} />
        <Route path="searchTest" element={<SearchTest />} />
      </Route>
    </Routes>
  );
}
