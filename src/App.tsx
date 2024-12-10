import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout";
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
    <RootLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category" element={<Category />} />
        <Route path="/createCourse" element={<CreateCourse />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/channelTest" element={<ChannelTest />} />
        <Route path="/userTest" element={<UserTest />} />
        <Route path="/authTest" element={<AuthTest />} />
        <Route path="/searchTest" element={<SearchTest />} />
      </Routes>
    </RootLayout>
  );
}
