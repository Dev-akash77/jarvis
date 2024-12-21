import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="flex flex-col gap-[2rem] w-[60%]">
        <p className="text-[3rem] leading-[4rem]">
          Say <span className="highlight">hello</span> to seamless productivity
          and intelligent assistance. <span className="highlight">Jarvis</span>{" "}
          {""}
          is your ultimate digital companion
        </p>
        <div className="mt-[3rem]">
          <Link to={'/jarvis'}>
            {" "}
            <Button text={"Try Jarvis"} />
          </Link>
        </div>
      </div>
      <img
        src="https://i.gifer.com/origin/1b/1b8ba7b0bdbce70d1976221f5c4f6c51_w200.webp"
        alt=" jarvis main section image"
        className="w-[30rem]"
      />
    </div>
  );
};

export default Hero;
