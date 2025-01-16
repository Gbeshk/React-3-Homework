import React from "react";
import "./organism.css";
import MolecuLeft from "../moleculeleft/moleculeleft";
import MoleculeRight from "../moleculeright/moleculeright";
function Organism() {
  return (
    <>
      <div className="organismdiv">
        <MolecuLeft />
        <MoleculeRight />
      </div>
    </>
  );
}
export default Organism;
