import "../css/index.css";
import { useNavigate } from "react-router";
import { postLogout } from "../api/api";
import MyContents from "../components/main/My/MypageContents";

export default function MyPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-[767px] flex flex-col items-center h-screen">
        {/* blur blue*/}
        <div className="absolute blur-bg-center"/>

          {/*glass 창 */}
          <MyContents/>


          <button
            className="absolute"
            onClick={() => {
              postLogout(navigate);
            }}
            >
            logout
          
          </button>
          
      </div>
    </>
  );
}
