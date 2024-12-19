import { Link } from "react-router";
import NotFoundImg from "../assets/images/Notfound_bgGradient.svg";
import logo from "../assets/images/Notfound_logo.svg";

export default function NotFound() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${NotFoundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }} 
        className={`h-full w-full flex flex-col items-center justify-center`}>
        <div className="flex flex-col items-center mt-[95px]">
          <div className="flex flex-col items-center">
            <div
              style={{textShadow: '0px 4px 15px rgba(47, 125, 215, 0.50)'}} 
              className="flex flex-row items-center justify-between w-[170px] leading-[4px] pl-2">
              <p className="font-rubik text-[40px] rotate-90 text-white "> ( </p>
              <p className="font-rubik text-[40px] rotate-90 text-white "> ( </p>
            </div>
            <h1
              style={{textShadow: '0px 4px 15px rgba(47, 125, 215, 0.50)'}} 
              className="font-rubik text-[100px] text-white leading-[119px] ">404</h1>
          </div>
          <h2
            style={{textShadow: '0px 4px 15px rgba(47, 125, 215, 0.50)'}} 
            className="font-rubik text-[50px] text-white mt-8">Oops!</h2>
          <p 
            style={{textShadow: '0px 4px 15px rgba(47, 125, 215, 0.50)'}} 
            className="text-center font-pretendard font-semiBold text-white text-[20px] mt-[50px]">잘못 찾아오셨어요. <br/> 나가시는 길은 이쪽입니다 :P</p>
          <Link to="/">
            <button 
              
              className={`
                bg-primary-500 w-[209px] h-[58px] rounded-[50px] text-white
                font-pretendard font-bold text-base shadow-backblue\
                mt-[53px] hover:bg-primary-600
                `}
                > Plaist로 돌아가기</button>
          </Link>
          <img src={logo} className="mt-[80px]"/>
        </div>
      </div>
    </div>
  );
}
