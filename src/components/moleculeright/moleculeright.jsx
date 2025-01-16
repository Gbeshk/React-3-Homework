import React from "react";
import "./moleculeright.css";
import AtomSummary from "../atomsummary/atomsummary";
import MoleculeReaction from "../moleculereaction/moleculereaction";
import MoleculeMemory from "../moleculeimemory/moleculememory";
import MoleculeVerbal from "../moleculeverbal/moleculeverbal";
import MoleculeVisual from "../moleculevisual/moleculevisual";
import MoleculeContinue from "../moleculecontinue/moleculecontinue";
function MoleculeRight(params) {
  return (
    <>
      <div className="rightdiv">
        <AtomSummary />
        <MoleculeReaction />
        <MoleculeMemory />
        <MoleculeVerbal />
        <MoleculeVisual />
        <MoleculeContinue />
      </div>
    </>
  );
}
export default MoleculeRight;
