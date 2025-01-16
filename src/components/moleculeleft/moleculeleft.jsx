import React from "react";
import AtomResult from "../atomresult/atomresult";
import AtomScore from "../atomscore/atomscore";
import AtomComment from "../atomcomment/atomcomment";
import "./moleculeft.css";
function MolecuLeft() {
  return (
    <>
      <div className="leftdiv">
        <AtomResult />
        <AtomScore />
        <AtomComment />
      </div>
    </>
  );
}
export default MolecuLeft;
