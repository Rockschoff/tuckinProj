import React from "react";
import "./About.css";
import Form from "../Components/Form.js";
import Footer from "../Components/Footer.js";

function About() {
  return (
    <>
      <div>
        <div className="about-heading">About us</div>
        <div className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id
          neque aliquam vestibulum. Elit ullamcorper dignissim cras tincidunt
          lobortis feugiat vivamus. Est ultricies integer quis auctor elit sed.
          Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
          Aliquet nibh praesent tristique magna sit amet purus gravida. Sed
          lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
          Faucibus in ornare quam viverra orci sagittis. Maecenas ultricies mi
          eget mauris pharetra et. Libero justo laoreet sit amet cursus sit amet
          dictum. Nisl pretium fusce id velit ut tortor pretium. Orci dapibus
          ultrices in iaculis nunc sed. Sem integer vitae justo eget magna
          fermentum. Eget est lorem ipsum dolor sit amet.
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
}
export default About;
