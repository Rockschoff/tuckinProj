import React from "react";
import "./Product3.css";
import SliderCard from "../Components/SliderCard";
import ProductsInfo from "../Components/ProductsInfo";

// import pic1 from "../images/buypic4.png";
import CarousalCard from "../Components/CarousalCard.js";
import Form from "../Components/Form";
import Footer from "../Components/Footer.js";
import ProdPics from "../Components/ProdPics.js";
import Send from "../Components/Send";
import Bought from "../Components/Bought";
import Popup from "../Components/Popup";

function Product1() {
  //state for the size picked and the number added
  const [cart, setCart] = React.useState(0);
  const [color, setColor] = React.useState("white");
  const [main, setMain] = React.useState(ProdPics.four.white[0]);
  const [size, setSize] = React.useState("118x118");
  const [isOpen, setIsOpen] = React.useState(false);

  function togglePopup() {
    setIsOpen(!isOpen);
  }

  function renderOptions() {
    if (color === "white") {
      return (
        <>
          <img
            src={ProdPics.four.white[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.white[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.white[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.white[1]);
            }}
          ></img>
        </>
      );
    } else if (color === "green") {
      return (
        <>
          <img
            src={ProdPics.four.green[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.green[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.green[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.green[1]);
            }}
          ></img>
        </>
      );
    } else if (color === "pink") {
      return (
        <>
          <img
            src={ProdPics.four.pink[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.pink[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.pink[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.pink[1]);
            }}
          ></img>
        </>
      );
    } else {
      return (
        <>
          <img
            src={ProdPics.four.grey[0]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.grey[0]);
            }}
          ></img>
          <img
            src={ProdPics.four.grey[1]}
            className="option"
            onClick={() => {
              Send("Product3", "option");
              setMain(ProdPics.four.grey[1]);
            }}
          ></img>
        </>
      );
    }
  }

  function handleDeletion() {
    if (cart > 0) {
      setCart(cart - 1);
    } else {
      setCart(0);
    }
  }

  return (
    <>
      <div>
        <div className="photo-section">
          <img src={main} className="main-photo"></img>
          <div className="photo-options">
            {/*<img
              src={ProdPics.three[0]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[0]);
              }}
            ></img>
            <img
              src={ProdPics.three[1]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[1]);
              }}
            ></img>
            <img
              src={ProdPics.three[2]}
              className="option"
              onClick={() => {
                setMain(ProdPics.three[2]);
              }}
            ></img>*/}
            {renderOptions()}
          </div>
        </div>
        <div className="product-name tag">Twill Sheet Set</div>
        <div className="product-prize tag">$ 138.00</div>
        <p className="colors-heading">Colors:</p>
        <div className="color-section">
          <div
            className="color-option "
            style={{ backgroundColor: "white" }}
            onClick={() => {
              Send("Product3", "ColorOption-white");
              setColor("white");
              setMain(ProdPics.four.white[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "lightgreen" }}
            onClick={() => {
              Send("Product3", "ColorOption-green");
              setColor("green");
              setMain(ProdPics.four.green[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              Send("Product3", "ColorOption-pink");
              setColor("pink");
              setMain(ProdPics.four.pink[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              Send("Product3", "ColorOption-grey");
              setColor("grey");
              setMain(ProdPics.four.grey[0]);
            }}
          ></div>
        </div>
        <p className="size-heading">Sizes :</p>
        <div className="size-section">
          <div className="size-option-row1">
            <div
              className="size-option"
              onClick={() => {
                Send("Product1", "108x108");
                setSize("108x108");
              }}
              style={size === "108x108" ? { backgroundColor: "lightgray" } : {}}
            >
              108x108
            </div>
            <div
              className="size-option"
              onClick={() => {
                Send("Product1", "112x112");
                setSize("112x112");
              }}
              style={size === "112x112" ? { backgroundColor: "lightgray" } : {}}
            >
              {" "}
              112x112
            </div>
            <div
              className="size-option"
              onClick={() => {
                Send("Product1", "108x112");
                setSize("108x112");
              }}
              style={size === "108x112" ? { backgroundColor: "lightgray" } : {}}
            >
              108x112
            </div>
          </div>
          {/*<div className="size-option-row2">
              <div className="size-option">Size</div>
              <div className="size-option">Size</div>
              <div className="size-option">Size</div>
            </div>*/}
        </div>
        <div className="add-section">
          <div className="counter add-button">
            <button
              className="minus-button butt"
              onClick={() => {
                handleDeletion();
              }}
            >
              -
            </button>
            <p className="button-prompt butt">{cart}</p>
            <button
              className="plus-button butt"
              onClick={() => {
                setCart(cart + 1);
              }}
            >
              +
            </button>
          </div>
          <div
            className="add-to-cart add-button"
            onClick={() => {
              Bought(cart, size, color, "Bamboo Fitted");
              togglePopup();
            }}
          >
            <p className="add-to-cart-text">Buy Now</p>
          </div>
          {isOpen && <Popup handleClose={togglePopup} />}
          <p className="cannot-find">
            Can’t find your size? Get notified when we restock
          </p>
          <p className="offer">
            30 night free trial + free delivery on Orders over $50
          </p>
        </div>

        <SliderCard
          heading="Description"
          content={ProductsInfo.product.description}
        />
        <SliderCard
          heading="Details"
          content={ProductsInfo.product.description}
        />
        <SliderCard heading="Care" content={ProductsInfo.product.description} />
        <CarousalCard />
        <p className="sign-up">Sign up to stay in touch! </p>
        <Form />
        <Footer />
      </div>
    </>
  );
}

export default Product1;
