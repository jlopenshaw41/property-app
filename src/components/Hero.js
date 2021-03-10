import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const HeroText = styled.div`
  position: absolute;
  padding: 50px;
  bottom: 35%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.85);
`;

const StyledCarousel = styled(Carousel)``;

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 65px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;

const Hero = () => {
  return (
    <HeroContainer className="hero-container">
      <StyledCarousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={800}
      >
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </StyledCarousel>
      <HeroText>
        <Title>Maison</Title>
        <h2>find a place to call home...</h2>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
