import React from "react";
import "./GoAndBackButton.css"
function GoAndBackButton() {
  return (
    <section className="GoAndBackButton">
      <div className="BackSection">
        <button className="back">Back</button>
      </div>
      <div className="GoSection">
        <button className="go">Continue to Evidence</button>
      </div>
    </section>
  );
}

export default GoAndBackButton;
