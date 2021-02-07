import React from "react";
import "./FlexCard.css";
import pic1 from "../images/1.svg";
import pic2 from "../images/2.svg";
import pic3 from "../images/3.svg";

function FlexCard({ ImgSrc }) {
  function WhichPic(src) {
    if (src === "1") {
      return pic1;
    } else {
      if (src === "2") {
        return pic2;
      } else {
        return pic3;
      }
    }
  }
  return (
    <div>
      <div>
        <img src={WhichPic(ImgSrc)} />
        <p className="flexcard-heading">Repurposed and Reuseable</p>
        <p className="flexcard-content">
          We utilize every extra inch of our 100% biodegradable fabric to create
          the reusable drawstring bags that carry our sheets
        </p>
      </div>
    </div>
  );
}

export default FlexCard;
