import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { StoreContext } from "../Context/Store";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isLogin, setIsLogin, handleFromData,handleSubmit } = useContext(StoreContext);
  return (
    <div className="h-screen w-screen cc">
      <form className="px-[2rem] py-[1.5rem] w-[30%] rounded-xl border-2 border-cyan" onSubmit={(e)=>{handleSubmit(e)}}>
        <h2 className="cc text-3xl font-semibold capitalize text-cyan">
          {isLogin ? "Login" : "Register"}
        </h2>
        <div className="flex flex-col gap-5 mt-[3rem]">
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <p className="text-xl">Name</p>
              <input
                type="text"
                name="userName"
                onChange={(e) => {
                  handleFromData(e);
                }}
                required
                placeholder="name"
                className="p-2 rounded-md border border-cyan outline-none bg-transparent capitalize"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <p className="text-xl">Email</p>
            <input
              name="userEmail"
              onChange={(e) => {
                handleFromData(e);
              }}
              type="email"
              required
              placeholder="Email"
              className="p-2 rounded-md border border-cyan outline-none bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-xl">Password</p>
              <p
                className="cursor-pointer text-lg"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <IoEyeOff />}
              </p>
            </div>
            <input
              name="userPassword"
              onChange={(e) => {
                handleFromData(e);
              }}
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              className="p-2 rounded-md border border-cyan outline-none bg-transparent"
            />
          </div>
          <div className="flex justify-end text-cyan">
            <p
              className="w-max cursor-pointer"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              {isLogin
                ? "Don't have any account ?"
                : "Allraedy have an account ?"}
            </p>
          </div>
        </div>
        <div className="cc mt-16">
          <button className="shadow__btn cursor-pointer" type={"submit"}>
            {isLogin ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
