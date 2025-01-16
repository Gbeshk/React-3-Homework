import React from "react";
import "./atomvisual.css";
import visualicon from "../../assets/images/visualicon.svg";
function AtomVisual() {
  return (
    <>
      <img src={visualicon} className="visualicon" alt="" />
      <p className="visual">Visual</p>
      <p className="visualscore">
        73<span className="visualtotalscore">/ 100</span>
      </p>
    </>
  );
}
export default AtomVisual;
