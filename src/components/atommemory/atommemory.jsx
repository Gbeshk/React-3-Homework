import React from "react";
import "./atommemory.css";
import memoryicon from "../../assets/images/memoryicon.svg";
function AtomMemory() {
  return (
    <>
      <img src={memoryicon} className="memoryicon" alt="" />
      <p className="memory">Memory</p>
      <p className="memoryscore">
        92<span className="memorytotalscore">/ 100</span>
      </p>
    </>
  );
}
export default AtomMemory;
