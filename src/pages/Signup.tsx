import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { NavLink, useNavigate } from "react-router";
import "../css/font.css";
import passwordIcon from "../assets/images/passwordIcon.svg";
import { postSingUp } from "../api/api";
import "../css/blur.css";

export default function Signup() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  const [nicknameTouched, setNicknameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "nickname":
        setNickname(value);

        if (nickname.length < 3) {
          setNicknameError("Nickname must be at least 3 characters long");
        } else {
          setNicknameError("");
        }
        break;
      case "email":
        setEmail(value);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          setEmailError("Please enter a valid email address");
        } else {
          setEmailError("");
        }
        break;
      case "password":
        setPassword(value);
        if (password.length < 8) {
          setPasswordError("Password must be at least 8 characters long");
        } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
          setPasswordError("Password must contain both letters and numbers");
        } else {
          setPasswordError("");
        }
        break;
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    switch (name) {
      case "nickname":
        setNicknameTouched(true);
        break;

      case "email":
        setEmailTouched(true);
        break;

      case "password":
        setPasswordTouched(true);
        break;
    }
  };

  const validateForm = () => {
    let valid = true;

    if (nickname.length < 3) {
      setNicknameError("Nickname must be at least 3 characters long");
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      valid = false;
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      setPasswordError("Password must contain both letters and numbers");
      valid = false;
    }

    setIsFormValid(valid);
  };

  useEffect(() => {
    validateForm();
  }, [nickname, email, password]);

  return (
    <div className="w-72 h-full relative ">
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
          onChange={handleChange}
          onFocus={handleFocus}
          error={nicknameTouched ? nicknameError : ""}
        />
        <InputField
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          onFocus={handleFocus}
          error={emailTouched ? emailError : ""}
        />
        <div className="relative">
          <InputField
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            onFocus={handleFocus}
            error={passwordTouched ? passwordError : ""}
            className="relative z-10"
          />
          <img
            src={passwordIcon}
            className="absolute top-[15px] left-[255px] z-50"
          />
        </div>
        <button
          type="submit"
          className={`
            w-full h-14 mt-[18px] font-pretendard
            rounded-[50px]
            ${isFormValid ? "bg-primary-500" : "bg-primary-400"} text-white`}
          disabled={!isFormValid}
          onClick={(e) => {
            e.preventDefault();
            postSingUp(email, nickname, password, navigate);
          }}
        >
          회원가입
        </button>
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
