import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import RootLayout from "./layouts/RootLayout";
import Category from "./pages/Category";
import CreateCourse from "./pages/CreateCourse";
import MyPage from "./pages/MyPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/category" element={<Category />} />
          <Route path="/createCourse" element={<CreateCourse />} />
          <Route path="/my-page" element={<MyPage />} />
        </Route>
      </Routes>
    </>
  );
}
