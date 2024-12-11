import "../css/index.css";
import { useNavigate } from "react-router";
import { postLogout } from "../api/api";

export default function MyPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="blur-bg-center"></div>
      </div>

      <h1>MyPage</h1>
      <button
        onClick={() => {
          postLogout(navigate);
        }}
      >
        logout
      </button>
    </>
  );
}
