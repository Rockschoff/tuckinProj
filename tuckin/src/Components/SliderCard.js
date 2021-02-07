import React from "react";
import "./SliderCard.css";

function SliderCard({ heading, content }) {
  const [display, setDisplay] = React.useState({ display: "none" });
  function showContent() {
    if (display.display === "none") {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  }
  return (
    <div className="slider-wrapper">
      <div className="slide-heading" onClick={showContent}>
        {heading}
      </div>
      <div className="slide-content" style={display}>
        <p className="slide-content-para">{content}</p>
      </div>
    </div>
  );
}

export default SliderCard;
