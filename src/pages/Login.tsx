import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router";

import "../styles/index.css";
import { postLogin } from "../api/api";
import Validate from "../components/utills/Validate";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let valid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      valid = false;
    }
    if (password.length < 8) {
      valid = false;
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      valid = false;
    }
    setIsFormValid(valid);
  };
  const changeEmail = (email: string) => {
    setEmail(email);
  };
  const changePassword = (password: string) => {
    setPassword(password);
  };
  return (
    <div className="relative w-72 h-96 ">
      <div className="text-center">
        <h1 className="text-primary-600 text-[50px] font-rubik mb-[32px]">
          Login
        </h1>
      </div>
      <form className="mt-10">
        <Validate
          validateForm={validateForm}
          email={email}
          changeEmail={changeEmail}
          password={password}
          changePassword={changePassword}
        >
          <button
            type="submit"
            className={`
              w-full h-14 mt-[10px]
              rounded-[50px] font-pretendard
              ${isFormValid ? "bg-primary-500" : "bg-primary-400"} text-white`}
            disabled={!isFormValid}
            onClick={(e) => {
              e.preventDefault();
              postLogin(email, password, navigate, page);
            }}
          >
            로그인
          </button>
        </Validate>
      </form>
      <div className="text-center mt-[22px]">
        <p className="text-primary-800 text-xs font-pretendard text-[13px]">
          Don’t have an account?{" "}
          <NavLink
            to="/signup"
            className="text-primary-600 font-pretendard  font-medium text-[13px]"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
