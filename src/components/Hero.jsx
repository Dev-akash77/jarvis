import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex md:flex-row md:items-center md:justify-between justify-center md:mt-0 mt-7 gap-5 md:gap-0 h-screen flex-col-reverse">
      <div className="flex flex-col gap-[2rem] md:w-[60%]">
        <p className="md:text-[3rem] text-[1.5rem] md:leading-[4rem]">
          Say <span className="highlight">hello</span> to seamless productivity
          and intelligent assistance. <span className="highlight">Jarvis</span>{" "}
          {""}
          is your ultimate digital companion
        </p>
        <div className="md:mt-[3rem]">
          <Link to={'/jarvis'}>
            {" "}
            <Button text={"Try Jarvis"} />
          </Link>
        </div>
      </div>
      <div className="cc"><img
        src="https://i.gifer.com/origin/1b/1b8ba7b0bdbce70d1976221f5c4f6c51_w200.webp"
        alt=" jarvis main section image"
        className="md:w-[30rem] w-[17rem]"
      /></div>
    </div>
  );
};

export default Hero;
