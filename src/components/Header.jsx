import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/Store";

const Header = () => {
  const { loginUserData, setLoginUserData } = useContext(StoreContext);
  
  return (
    <div className="h-full flex items-center justify-between overflow-hidden container">
      <h2 className="text-cyan text-4xl tracking-[.5rem] cursor-pointer">
        JARVIS
      </h2>
      <div className="border-2 border-cyan bg-transparent px-4 py-2 text-cyan text-xl cursor-pointer">
       {!loginUserData&&<Link to={"/jarvis"}>{loginUserData ? "Logout" : "Login"}</Link>}
        {loginUserData&&<p onClick={()=>{setLoginUserData(null)}}>{loginUserData ? "Logout" : "Login"}</p>}
      </div>
    </div>
  );
};

export default Header;
