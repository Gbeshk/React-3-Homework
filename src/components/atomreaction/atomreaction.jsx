import React from "react";
import "./atomreaction.css";
import reactionicon from "../../assets/images/reactionicon.svg";
function AtomReaction() {
  return (
    <>
      <img src={reactionicon} className="reactionicon" alt="" />
      <p className="reaction">Reaction</p>
      <p className="reactionscore">
        80<span className="reactiontotalscore">/ 100</span>
      </p>
    </>
  );
}
export default AtomReaction;
