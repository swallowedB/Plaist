import { Route, Routes } from "react-router";
// 레이아웃
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
// 카테고리
import Category from "./pages/Category";
// 메인
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
// 코스 생성 관련
import ViewMyCourseLayout from "./layouts/ViewMyCourseLayout";
import ViewMycourse from "./pages/createcourse/ViewMycourse";
import SelectStyle from "./pages/createcourse/SelectStyle";
import SelectCourseMain from "./pages/createcourse/SelectCourseMain";
import MapView from "./pages/createcourse/MapView";
// 그외
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// 상단바
import Notification from "./pages/Notification";
// import HamburgerMenu from "./pages/HamburgerMenu";
// 테스트
import AuthTest from "./pages/test/AuthTest";
import UserTest from "./pages/test/UserTest";
import SearchTest from "./pages/test/SearchTest";
// 권한 관련
import { useEffect } from "react";
import { useAuthStore } from "./stores/authStore";
import UserInfo from "./components/main/My/userInfo/UserInfo";
import ExpainCourse from "./pages/createcourse/ExpainCourse";
import SucessMyPost from "./pages/createcourse/SucessMyPost";
import { getCookie } from "./utills/Auth/getCookie";

export default function App() {
  const login = useAuthStore((state) => state.login);
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      login(token);
    }
  }, [login]);

  return (
    <Routes>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        {/* 블러 글레스 적용 페이지 */}
        <Route element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        {/* Blur 적용하지 않은 페이지 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/notification" element={<Notification />} />
          {/* <Route path="/hamburger-meuu" element={<HamburgerMenu />} /> */}
        </Route>

        {/* create-course 경로 */}
        <Route path="create-course">
          {/* view-my-course 경로 */}
          <Route element={<ViewMyCourseLayout />}>
            <Route path="view-my-course" element={<ViewMycourse />} />

            {/* create-my-course 하위 경로 */}
            <Route path="flow1-select-style" element={<SelectStyle />} />
            <Route path="flow2-select-course">
              <Route path="" element={<SelectCourseMain />} />
              <Route path="map-view" element={<MapView />} />
            </Route>
            <Route path="flow3-explain-course" element={<ExpainCourse />} />
            <Route path="flow4-sucesss-post" element={<SucessMyPost />} />
          </Route>
        </Route>

        <Route path="my-page" element={<MyPage />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="category" element={<Category />} />
        <Route path="userTest" element={<UserTest />} />
        <Route path="authTest" element={<AuthTest />} />
        <Route path="searchTest" element={<SearchTest />} />
      </Route>
    </Routes>
  );
}
