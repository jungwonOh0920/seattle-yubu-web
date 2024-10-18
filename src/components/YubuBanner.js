import React from "react";
import "./styles/banner.css";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const YubuBanner = () => {
  return (
    <>
      <h1 className="banner-heading z-1 position-absolute top-50 start-50">
        Coming Soon 😜
      </h1>
      <Row className="position-absolute top-0 start-0 end-0">
        <Image
          src={require("../assets/banner.JPEG")}
          className="banner-image vh-100"
          rounded
        />
      </Row>
    </>
  );
};

export default YubuBanner;
