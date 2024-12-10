import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import RootLayout from "./layouts/RootLayout";
import Category from "./pages/Category";
import CreateCourse from "./pages/CreateCourse";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <RootLayout>
      <Routes>
        {/* 각 경로에 따른 페이지 매핑 */}
        <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
        <Route path="/category" element={<Category />} />{" "}
        {/* 카테고리 페이지 */}
        <Route path="/createCourse" element={<CreateCourse />} />{" "}
        {/* 코스 생성 */}
        <Route path="/my-page" element={<MyPage />} /> {/* 마이페이지 */}
        <Route path="/login" element={<Login />} /> {/* 로그인 페이지 */}
        <Route path="/signup" element={<Signup />} /> {/* 회원가입 페이지 */}
      </Routes>
    </RootLayout>
  );
}
