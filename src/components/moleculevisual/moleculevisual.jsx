import React from "react";
import "./moleculevisual.css";
import AtomVisual from "../atomvisual/atomvisual";
function MoleculeVisual() {
  return (
    <>
      <div className="visualdiv">
        <AtomVisual />
      </div>
    </>
  );
}
export default MoleculeVisual;
