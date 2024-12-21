import React from "react";
import Heading from "../UI/Heading";

const Section2 = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="cc">
        <Heading text={"About"} highlight={"Jarvis"} />
      </div>
      <div className="md:items-center flex md:flex-row md:justify-between justify-center md:mt-0 mt-7 gap-5 md:gap-0 flex-col-reverse" >
        <p className="md:text-[3rem] text-[1.5rem] md:leading-[4rem] md:w-[70%]">
         <span className="highlight">Jarvis</span> is a voice-based assistant designed to simplify tasks by
          interpreting voice commands and taking <span className="highlight">automated</span> actions.
        </p>
        <div className="cc">
          {" "}
          <img
            src="https://i.gifer.com/origin/86/86cac0842428caff0684f86968dc1f26_w200.webp"
            alt="jsrvis for about page"
            className="w-[40rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section2;
