import React, {useLayoutEffect, useState} from "react";
import Slider from "react-slick";
import {Container} from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComp.scss";

const useWindowSize = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return currentWidth;
};

const SliderComp = ({slideImages}) => {
  const screenWidth = useWindowSize();
  const settings = {
    infinite: true,
    slidesToShow: screenWidth < 768 ? 3 : 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <Container className="slider-comp" fluid>
      <Slider {...settings}>
        {
          slideImages.map((val, index) => (
            <div key={index} className="img-container">
              <img src={val} alt="baboons" style={{width: "100%"}}/>
            </div>
          ))
        }
      </Slider>
    </Container>
  );
};

export default SliderComp;