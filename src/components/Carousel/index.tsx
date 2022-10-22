import React, { useRef } from "react";
import { Carousel } from "antd";
import { Arrow, Blur, Container, Content } from "./style";
const img1 = require("../../assets/img/house1.png");
const img2 = require("../../assets/img/house2.png");
var { LazyLoadImage } = require("react-lazy-load-image-component");

const GenCarousel: React.FC = () => {
  const slider = useRef() as any;

  const onMove = ({
    target: {
      dataset: { name },
    },
  }): void => {
    if (name === "right") slider.current?.next();
    if (name === "left") slider.current?.prev();
  };

  return (
    <Container>
      <Arrow data-name="right" onClick={onMove} left="true" />
      <Carousel ref={slider}>
        <LazyLoadImage src={img1} effect="blur" />
        <LazyLoadImage src={img2} effect="blur" />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>5,200 / Month</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
