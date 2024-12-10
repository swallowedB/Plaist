import React, { useState, useEffect } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";
import InputField from "../components/InputField";
import { NavLink } from "react-router";
import "../css/font.css";

export default function Signup() {
  const [form, setForm] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [touched, setTouched] = useState({
    nickname: false,
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

    if (form.nickname.length < 3) {
      errors.nickname = "Nickname must be at least 3 characters long";
      valid = false;
    }

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
    <BackgroundLayout>
      <div className="w-72 h-96 relative ">
        <div className="text-center">
          <h1 className="text-sky-700 text-4xl font-normal rubik-bubbles mb-4">
            Login
          </h1>
        </div>
        <form className="mt-10 space-y-4">
          <InputField
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && formErrors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && formErrors.password}
          />
          <button
            type="submit"
            className={`w-full h-14 ${
              isFormValid ? "bg-blue-500" : "bg-blue-300"
            } text-white rounded-3xl font-bold`}
            disabled={!isFormValid}
          >
            회원가입
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-xs">
            Don’t have an account?{" "}
            <NavLink to="/signup" className="text-sky-700 font-medium">
              Signup
            </NavLink>
          </p>
        </div>
      </div>
    </BackgroundLayout>
  );
}
