import { useEffect, useState } from "react";

import InputField from "../InputField";
import typeText from "../../assets/images/password_icon_text.png";
import typePassword from "../../assets/images/password_icon_password.png";

export default function Validate({
  children,
  validateForm,
  email,
  changeEmail,
  password,
  changePassword,
}: {
  children: React.ReactNode;
  validateForm: () => void;
  email: string;
  changeEmail: (email: string) => void;
  password: string;
  changePassword: (password: string) => void;
}) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {}, [isActive]);

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    changeEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("유효한 이메일 주소를 작성해주세요");
    } else {
      setEmailError("");
    }
  };
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    changePassword(value);
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
      setPasswordError("Password must contain both letters and numbers");
    } else {
      setPasswordError("");
    }
  };

  const emailFocus = () => {
    setEmailTouched(true);
  };
  const passwordFocus = () => {
    setPasswordTouched(true);
  };

  useEffect(() => {
    validateForm();
  }, [email, password]);

  return (
    <>
      <InputField
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={emailChange}
        onFocus={emailFocus}
        error={emailTouched ? emailError : ""}
      />
      <div className="relative">
        <InputField
          id="password"
          type={isActive ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwordChange}
          onFocus={passwordFocus}
          error={passwordTouched ? passwordError : ""}
          className="relative z-10"
        />
        <button
          type="button"
          onClick={() => {
            setIsActive((prevState) => !prevState);
          }}
          className="absolute top-[15px] left-[255px] z-50 "
        >
          <img src={isActive ? typeText : typePassword} />
        </button>
      </div>
      {children}
    </>
  );
}
