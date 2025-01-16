import React from "react";
import AtomReaction from "../atomreaction/atomreaction";
import "./moleculereaction.css";
function MoleculeReaction(params) {
  return (
    <>
      <div className="reactiondiv">
        <AtomReaction />
      </div>
    </>
  );
}
export default MoleculeReaction;
