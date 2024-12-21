import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section1 from './../components/Section1';
import Section2 from './../components/Section2';

const Home = () => {
  const { data } = useContext(StoreContext);
  return (
    <div className="cc">
       <div className="w-screen bg-black fixed top-0 h-[5rem] cc z-50"> <Header /></div>
      <div className="container">
        <Hero />
        <Section1/>
        <Section2 />
      </div>
    </div>
  );
};

export default Home;
