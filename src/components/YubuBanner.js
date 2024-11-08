import React from "react";
import "./styles/banner.css";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const YubuBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1500}>
          <div className="h-128 relative">
            <img
              className="absolute left-1/2 h-48 -translate-x-1/2 translate-y-1/2 z-1"
              src={require("../assets/singleYubu.png")}
              alt="solo-logo"
            />
            <img
              className="w-full h-full object-cover opacity-50"
              src={require("../assets/banner.JPEG")}
              alt="first-banner"
            />
          </div>
          <Carousel.Caption>
            <h3 className="text-amber-400 text-5xl" style={{textShadow: "2px 2px #000000"}}>Seattle Yubu Coming Soon</h3>
            <p className="text-amber-400 text-3xl" style={{textShadow: "2px 2px #000000"}}>Fun-filled tofu pockets topped with your favorite flavors.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="h-128">
            <img
              className="w-full h-full object-cover"
              src={require("../assets/yubuTasting.jpg")}
              alt="second"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="h-128">
            <img
              className="w-full h-full object-cover"
              src={require("../assets/test.png")}
              alt="second"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default YubuBanner;
