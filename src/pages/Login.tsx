import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { NavLink, useNavigate, useSearchParams } from "react-router";
import "../css/tailwind.css";
import passwordIcon from "../assets/images/passwordIcon.svg";
import { postLogin } from "../api/api";

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
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
  }, [email, password]);

  return (
    <div className="relative w-72 h-96 ">
      <div className="text-center">
        <h1 className="text-primary-600 text-[50px] font-rubik mb-[32px]">
          Login
        </h1>
      </div>
      <form className="mt-10">
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
            className="absolute top-[15px] left-[255px] z-50 "
          />
        </div>
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
