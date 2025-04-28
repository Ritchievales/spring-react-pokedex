import React from "react";
import "./RightPanel.css";

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="stats">
        <p>SEEN: 151</p>
        <p>OWN: 151</p>
      </div>
      <div className="menu">
        <p>DATA</p>
        <p>CRY</p>
        <p>AREA</p>
        <p>MOVE</p>
        <p>QUIT</p>
      </div>
    </div>
  );
}

export default RightPanel;
