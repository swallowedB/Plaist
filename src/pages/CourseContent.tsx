import images from "../assets/images/importImages";
import CourseContentDoc from "../components/main/courseContent/CourseContentDoc";

export default function CourseContent() {
  return (
    <div className="relative w-full h-auto hadow-lg hrounded-lg">
      <div className="relative">
        <img
          src={images.course_background_img}
          alt="background"
          className="object-cover w-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full  py-[38px] bg-white rounded-t-[40px] top-[419px] shadow-[0_-8px_10px_0_rgba(48,72,100,0.25)] h-auto min-h-[1800px]">
        <div className="px-[61px] h-auto overflow-y-auto ">
        <CourseContentDoc />  
        </div>
        
      </div>
    </div>
  );
}
