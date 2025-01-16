import React from "react";
import AtomMemory from "../atommemory/atommemory";
import "./moleculememory.css";
function MoleculeMemory(params) {
  return (
    <>
      <div className="memorydiv">
        <AtomMemory />
      </div>
    </>
  );
}
export default MoleculeMemory;
