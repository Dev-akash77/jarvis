import React, { useContext, useEffect } from "react";
import { StoreContext } from "../Context/Store";
import Login from "../Auth/Login";
import { FaMicrophone } from "react-icons/fa";
import Loades from "../UI/Loades";

const Jarvis = () => {
  const { loginUserData, speak, handleClick, listining,stopRecognition} =
    useContext(StoreContext);
  if (!loginUserData) {
    return <Login />;
  }

  useEffect(() => {
    if (loginUserData) {
      speak(
        `Hi ${
          loginUserData?.userName?.split(" ")[0] || loginUserData?.userName
        }, I am Jarvis how can I help you`
      );
    }
  }, [loginUserData]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="cc mt-[5rem]">
        <img
          src="https://i.gifer.com/origin/38/38b9ada46c0a26d92a966cd12c7a3edb_w200.webp"
          alt="jarvis logo"
          className="w-[20rem]"
        />
      </div>
      <h1 className="tracking-[1rem] cc text-cyan text-4xl font-medium mt-7">
        JARVIS
      </h1>
      <p className="flex items-center justify-center mt-5 gap-2">
        Hi{" "}
        <span className="capitalize">
          {" "}
          {loginUserData?.userName?.split(" ")[0] || loginUserData?.userName},
        </span>
        I am Jarvis how can I help you
      </p>
      <div className="cc">
        {!listining ? (
          <p
            className="md:w-[30%] w-[60%] py-2 rounded-3xl flex items-center justify-center bg-[#8efbff95] gap-2 mt-10 cursor-pointer"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <FaMicrophone /> {"click here to speak"}
          </p>
        ) : (
          <div className="mt-10"><Loades /></div>
        )}
      </div>
    </div>
  );
};

export default Jarvis;
