import React, { useContext } from "react";
import { StoreContext } from "../Context/Store";

const Loades = () => {
  const { stopRecognition } = useContext(StoreContext);
  return (
    /* From Uiverse.io by JkHuger */
    <ul className="wave-menu" onClick={stopRecognition}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Loades;
