import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { NavLink, useNavigate } from "react-router";
import "../css/font.css";
import { postSingUp } from "../api/api";
import "../css/blur.css";
import Validate from "../components/utills/Validate";

export default function Signup() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormValidPlus, setIsFormValidPlus] = useState(false);
  const [nicknameTouched, setNicknameTouched] = useState(false);

  const nicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
    if (nickname.length < 3) {
      setNicknameError("Nickname must be at least 3 characters long");
    } else {
      setNicknameError("");
    }
  };

  const nicknameFocus = () => {
    setNicknameTouched(true);
  };

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

  const validateFormPlus = () => {
    let valid = true;
    if (nickname.length < 3) {
      setNicknameError("Nickname must be at least 3 characters long");
      valid = false;
    }
    setIsFormValidPlus(valid);
  };

  useEffect(() => {
    validateFormPlus();
  }, [nickname]);

  const changeEmail = (email: string) => {
    setEmail(email);
  };
  const changePassword = (password: string) => {
    setPassword(password);
  };

  return (
    <div className="relative h-full w-72 ">
      <div className="text-center">
        <h1 className="text-primary-600 text-[40px] font-normal font-rubik ">
          Welcome
        </h1>
        <p className="text-primary-600 text-[12px] font-pretendard font-medium">
          Please fill the details and create account
        </p>
      </div>
      <form className="mt-6">
        <InputField
          id="nickname"
          name="nickname"
          placeholder="Nickname"
          value={nickname}
          onChange={nicknameChange}
          onFocus={nicknameFocus}
          error={nicknameTouched ? nicknameError : ""}
        />
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
            w-full h-14 mt-[18px] font-pretendard
            rounded-[50px]
            ${
              isFormValid && isFormValidPlus
                ? "bg-primary-500"
                : "bg-primary-400"
            } text-white`}
            disabled={!(isFormValid && isFormValidPlus)}
            onClick={(e) => {
              e.preventDefault();
              postSingUp(email, nickname, password, navigate);
            }}
          >
            회원가입
          </button>
        </Validate>
      </form>
      <div className="text-center mt-[22px]">
        <p className="text-primary-800 text-xs font-pretendard text-[13px] ">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-primary-600 font-pretendard font-medium text-[13px]"
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}
