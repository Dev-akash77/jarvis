import React from "react";
import Heading from "../UI/Heading";

const Section2 = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="cc">
        <Heading text={"About"} highlight={"Jarvis"} />
      </div>
      <div className="flex flex-col md:flex-row cc">
        <p className="text-[3rem] leading-[4rem] w-[70%]">
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
