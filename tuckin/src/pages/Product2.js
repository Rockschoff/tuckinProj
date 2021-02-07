import React from "react";
import "./Product2.css";
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
  const [color, setColor] = React.useState("white");
  const [main, setMain] = React.useState(ProdPics.one.white[0]);
  const [cart, setCart] = React.useState(0);
  const [size, setSize] = React.useState("118x118");
  const [isOpen, setIsOpen] = React.useState(false);
  function togglePopup() {
    setIsOpen(!isOpen);
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
          <img src={ProdPics.two} className="main-photo"></img>
          <div className="photo-options">
            <img src={ProdPics.two} className="option"></img>
          </div>
        </div>
        <div className="product-name tag">Charcoal Fitted Sheet Set</div>
        <div className="product-prize tag">$ 138.00</div>
        <p className="colors-heading">Colors:</p>
        <div className="color-section">
          {/*colors.map((color) => (
            <div className="color-option"></div>
          ))*/}
          <div
            className="color-option "
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              setColor("grey");
              setMain(ProdPics.one.white[0]);
            }}
          ></div>
          {/*<div
            className="color-option "
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("sage");
              setMain(ProdPics.one.sage[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "pink" }}
            onClick={() => {
              setColor("pink");
              setMain(ProdPics.one.pink[0]);
            }}
          ></div>
          <div
            className="color-option "
            style={{ backgroundColor: "lightblue" }}
            onClick={() => {
              setColor("strip");
              setMain(ProdPics.one.strip[0]);
            }}
          ></div>*/}
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
              Bought(cart, size, color, "Charcoal");
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
