import React, { useRef } from "react";
import { Carousel } from "antd";
import { Arrow, Blur, Container, Content, Img } from "./style";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

const GenCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Arrow data-name="right" onClick={onMove} left="true" />
      <Carousel ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
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
