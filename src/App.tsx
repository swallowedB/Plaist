import { Route, Routes } from "react-router";
// 레이아웃
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
// 카테고리
import Category from "./pages/Category";
// 메인
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/MainFeed";
// 코스 생성 관련
import ViewMyCourseLayout from "./layouts/ViewMyCourseLayout";
import ViewMycourse from "./pages/createcourse/ViewMycourse";
import CreateMyCourse from "./pages/createcourse/CreateMycourse";
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
import CreateChannel from "./pages/CreateChannel";

// 권한 관련
import CourseContent from "./pages/CourseContent";
import CourseContentLayout from "./layouts/CourseContentLayout";

import UserInfo from "./components/My/userInfo/UserInfo";
import { useCookie } from "./hooks/useCookie";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false); // 상태로 관리
  const cookieValue = useCookie();

  useEffect(() => {
    setIsLoggedin(cookieValue); // 쿠키 값에 따라 로그인 상태를 업데이트
  }, [cookieValue]);

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
          <Route element={<CourseContentLayout />}>
            <Route
              path="/course-content/:contentId"
              element={<CourseContent />}
            />
          </Route>

          <Route path="/notification" element={<Notification />} />
          {/* <Route path="/hamburger-meuu" element={<HamburgerMenu />} /> */}
        </Route>

        {/* create-course 경로 */}
        <Route path="create-course">
          <Route element={<ViewMyCourseLayout />}>
            {/* view-my-course 경로 */}
            <Route path="view-my-course" element={<ViewMycourse />} />
            {/* createMycourse */}
            <Route path="" element={<CreateMyCourse />} />
          </Route>
        </Route>

        <Route path="my-page" element={<MyPage />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="category" element={<Category />} />
        <Route path="userTest" element={<UserTest />} />
        <Route path="authTest" element={<AuthTest />} />
        <Route path="searchTest" element={<SearchTest />} />
        <Route path="createChannel" element={<CreateChannel />} />
      </Route>
    </Routes>
  );
}
