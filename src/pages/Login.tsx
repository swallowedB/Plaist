import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { NavLink, useNavigate } from "react-router";
import "../css/tailwind.css";
import passwordIcon from "../assets/images/passwordIcon.svg";
import { postLogin } from "../api/api";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
  };

  const validateForm = () => {
    const errors = { nickname: "", email: "", password: "" };
    let valid = true;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address";
      valid = false;
    }

    if (form.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      valid = false;
    } else if (
      !/[A-Za-z]/.test(form.password) ||
      !/[0-9]/.test(form.password)
    ) {
      errors.password = "Password must contain both letters and numbers";
      valid = false;
    }

    setFormErrors(errors);
    setIsFormValid(valid);
  };

  useEffect(() => {
    validateForm();
  }, [form]);

  return (
    <div className="relative w-72 h-96 ">
      <div className="text-center">
        <h1 className="text-primary-600 text-[40px] font-rubik mb-[52px]">
          Login
        </h1>
      </div>
      <form className="mt-10">
        <InputField
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && formErrors.email}
        />
        <div className="relative">
          <InputField
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && formErrors.password}
            className="relative z-10"
          />
          <img
            src={passwordIcon}
            className="absolute -mt-[58px] ml-[250px] z-50 -px-10"
          />
        </div>
        <button
          type="submit"
          className={`
              w-full h-14 mt-[18px]
              rounded-[50px] font-pretendard
              ${isFormValid ? "bg-primary-500" : "bg-primary-400"} text-white`}
          disabled={!isFormValid}
          onClick={(e) => {
            e.preventDefault();
            postLogin(form.email, form.password, navigate);
          }}
        >
          로그인
        </button>
      </form>
      <div className="text-center mt-[22px]">
        <p className="text-custom-gray text-xs font-pretendard text-[13px]">
          Don’t have an account?{" "}
          <NavLink
            to="/signup"
            className="text-primary-600 font-pretendard text-[13px]"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}
