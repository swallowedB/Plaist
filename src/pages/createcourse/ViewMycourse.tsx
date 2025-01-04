import { useEffect } from "react";
import { useNavigate } from "react-router";

import "../../styles/index.css";
import { useCookie } from "../../hooks/useCookie";
import ViewMyAllCourse from "../../components/viewMycourse/ViewMyAllCourse";
import FixedCreateButton from "../../components/viewMycourse/FixedCreateButton";
import ViewMyCourseHeader from "../../components/viewMycourse/ViewMyCourseHeader";

export default function CreateCourse() {
  const isLoggedIn = useCookie();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?page=my-course-builder/viewer");
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div
        id="relative content-area-container"
        className="flex flex-col h-screen min-w-[767px] items-center"
      >
        <div className="absolute blur-bg-my-page z-[-1] mt-[200px]" />

        <ViewMyCourseHeader />
        <ViewMyAllCourse />
        <FixedCreateButton />
      </div>
    </div>
  );
}
