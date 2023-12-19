import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Introducing our latest innovation, the SmartTech XYZ-2000. This
          cutting-edge device combines sleek design with advanced technology to
          revolutionize your daily life. With a user-friendly interface, the
          XYZ-2000 seamlessly integrates into your routine, offering
          unparalleled convenience. Its high-performance features include
          wireless connectivity, fast-charging capabilities, and an intuitive
          touch screen.
        </p>
        <p>
          The durable build ensures longevity, making it the perfect companion
          for both work and leisure. Elevate your productivity and stay
          connected effortlessly with the SmartTech XYZ-2000 – where style meets
          functionality.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
