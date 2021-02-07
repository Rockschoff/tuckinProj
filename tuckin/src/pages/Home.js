import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import hero from "../images/prodpics/Prod1/Prod1-white-main.png";
import "./Home.css";
import Card from "../Components/Card";
import Bamboo from "../images/bamboo.png";
import FlexCard from "../Components/FlexCard";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Send from "../Components/Send.js";

function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <img src={hero} className="hero-pic" />
        <Link>
          <button
            className="hero-button"
            onClick={() => {
              Send("Home", "Shop Now");
            }}
          >
            Shop Now
          </button>
        </Link>

        <div className="shop-heading"> Our Products </div>
        <div className="body">
          <Card type="1" />
          <Card type="2" />
          <Card type="3" />
        </div>
        <div className="conclusion">
          <img src={Bamboo} classNam="conclusion-image" />
          <p className="conclusion-text">Clean Bamboo, our fabric of future</p>
          <p className="made-from">
            Made from 100% organic bamboo, it’s softer, cooler and more
            sustainable than cotton. For a helathier planet and happier
            lounging.
          </p>
          <div className="flex">
            <FlexCard ImgSrc="1" />
            <FlexCard ImgSrc="2" />
            <FlexCard ImgSrc="3" />
          </div>
          <Link to="/Materials">
            <button
              className="see-more-button"
              onClick={() => {
                Send("Home", "See More");
              }}
            >
              See more...
            </button>
          </Link>
          <p className="sign-up-prompt">Sign Up to stay in touch</p>
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
