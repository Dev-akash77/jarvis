import React from "react";
import Heading from "../UI/Heading";
import WhyJarvis from "../Json/WhyJarvis.json";
import Card from "../UI/Card";
const Section1 = () => {
  return (
    <div className="mt-5 mb-[2rem]">
      <div className="cc">
        <Heading text={"Why"} highlight={"Jarvis"} lastText={"?"} />
      </div>
      <div className="mt-[3rem] grid md:grid-cols-2 place-content-center gap-5">
        {WhyJarvis.map((cur) => {
          return (
            <Card
              key={cur.id}
              des={cur.description}
              heading={cur.heading}
              id={cur.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
