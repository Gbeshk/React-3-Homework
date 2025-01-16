import React from "react";
import "./atomverbal.css";
import verbalicon from "../../assets/images/verbalicon.svg";
function AtomVerbal() {
  return (
    <>
      <img src={verbalicon} className="verbalicon" alt="" />
      <p className="verbal">Verbal</p>
      <p className="verbalscore">
        61<span className="verbaltotalscore">/ 100</span>
      </p>
    </>
  );
}
export default AtomVerbal;
