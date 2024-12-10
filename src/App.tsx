import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";
import BlurGlassLayout from "./layouts/BlurGlassLayout";
import NoBlurLayout from "./layouts/NoBlurLayout";
import Category from "./pages/Category";
import CreateCourse from "./pages/CreateCourse";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthTest from "./pages/test/AuthTest";
import ChannelTest from "./pages/test/ChannelTest";
import UserTest from "./pages/test/UserTest";
import SearchTest from "./pages/test/SearchTest";

export default function App() {
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
        <Route path="/" element={<NoBlurLayout />}>
          <Route path="category" element={<Category />} />
          <Route path="" element={<Main />} />
          <Route path="createCourse" element={<CreateCourse />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>
        <Route path="channelTest" element={<ChannelTest />} />
        <Route path="userTest" element={<UserTest />} />
        <Route path="authTest" element={<AuthTest />} />
        <Route path="searchTest" element={<SearchTest />} />
      </Route>
    </Routes>
  );
}
