import React from "react";
import "./Card.css";
import Img from "../images/hero.png";
import { Link } from "react-router-dom";
import ProdPics from "./ProdPics.js";
import Send from "./Send";
function Card({ type }) {
  const [typeOnePic, setTypeOnePic] = React.useState(
    type === 1 ? ProdPics.one.white[0] : ProdPics.four.white[0]
  );

  const [cardName, setCardName] = React.useState(
    type == "1"
      ? "buy-now-bamboo-lyocell"
      : type === "2"
      ? "buy-now-charcoal"
      : "buy-now-bamboo-fitted"
  );

  function renderCircles() {
    if (type === "1") {
      return (
        <>
          <div
            className="circle white-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.one.white[0]);
            }}
          ></div>
          <div
            className="circle sage-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.one.sage[0]);
            }}
          ></div>
          <div
            className="circle pink-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.one.pink[0]);
            }}
          ></div>
          <div
            className="circle strip-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.one.strip[0]);
            }}
          ></div>
        </>
      );
    } else if (type === "2") {
      return (
        <>
          <div className="circle grey-circle"></div>
        </>
      );
    } else {
      return (
        <>
          <div
            className="circle white-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.four.white[0]);
            }}
          ></div>
          <div
            className="circle sage-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.four.green[0]);
            }}
          ></div>
          <div
            className="circle pink-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.four.pink[0]);
            }}
          ></div>
          <div
            className="circle grey-circle"
            onClick={() => {
              setTypeOnePic(ProdPics.four.grey[0]);
            }}
          ></div>
        </>
      );
    }
  }

  return (
    <>
      <div className="card">
        <img
          src={
            type === "1" ? typeOnePic : type === "2" ? ProdPics.two : typeOnePic
          }
          className="card-img"
        />
        <div className="card-name">
          {type === "1"
            ? "Bamboo Lyocell Sheet"
            : type === "2"
            ? "Charcoal  sheets"
            : "Bamboo Lyocell Fitted Sheets"}
        </div>
        <div className=" card-prize">
          {type === "1" ? "$100" : type === "2" ? "$80" : "$60"}
        </div>
        <div className="card-line"></div>
        <div className="card-circles">
          {renderCircles()}

          <Link to={"/Product-" + type}>
            <div
              className="card-buy"
              onClick={() => {
                Send("Home", cardName);
              }}
            >
              Buy Now
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Card;
