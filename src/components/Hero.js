import React from "react";
import styled from "styled-components";
import HeroCarousel from "react-hero-carousel";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImg = styled.img`
  position: relative;
`;

const HeroText = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 50px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.85);
`;

const StyledCarousel = styled(HeroCarousel)``;

const Hero = () => {
  return (
    <StyledHero>
      <StyledCarousel interval={5000}>
        <HeroImg src={image1} width="100%" alt="" />
        <HeroImg src={image2} width="100%" alt="" />
        <HeroImg src={image3} width="100%" alt="" />
      </StyledCarousel>
      <HeroText>
        <h1>Home</h1>
        <h2>find a place to call home...</h2>
      </HeroText>
    </StyledHero>
  );
};

export default Hero;
