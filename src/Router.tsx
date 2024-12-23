import { Route, Routes } from "react-router";

// 레이아웃
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";

// 카테고리
import Category from "./pages/Category";

// 메인
import Main from "./pages/main/MainFeed";
import MainLayout from "./layouts/MainLayout";

// 코스 생성 관련
import MyCourseLayout from "./layouts/MyCourseLayout";
import ViewMycourse from "./pages/createcourse/ViewMycourse";
import CreateMyCourse from "./pages/createcourse/CreateMycourse";

// 그외
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Signup from "./pages/Signup";

// 상단바
import Notification from "./pages/Notification";

// 테스트
import CreateChannel from "./pages/CreateChannel";

// 권한 관련
import NotFound from "./pages/NotFound";
import CourseContent from "./pages/main/CourseContent";
import UserInfo from "./components/My/userInfo/UserInfo";
import CourseContentLayout from "./layouts/CourseContentLayout";
import OtherUserInfo from "./pages/OtherUserInfo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />

          {/* <Route path="/hamburger-meuu" element={<HamburgerMenu />} /> */}
        </Route>
        <Route element={<CourseContentLayout />}>
          <Route
            path="/course-content/:contentId"
            element={<CourseContent />}
          />
        </Route>

        {/* <Route path="/hamburger-meuu" element={<HamburgerMenu />} /> */}
        <Route path="/notification" element={<Notification />} />
        <Route path="my-page" element={<MyPage />} />
        <Route path="other-user-info/:userId" element={<OtherUserInfo />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="category" element={<Category />} />
        <Route path="createChannel" element={<CreateChannel />} />

        {/* create-course 경로 */}
        <Route path="my-course-builder">
          <Route element={<MyCourseLayout />}>
            {/* view-my-course 경로 */}
            <Route path="viewer" element={<ViewMycourse />} />
            {/* createMycourse */}
            <Route path="" element={<CreateMyCourse />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}
