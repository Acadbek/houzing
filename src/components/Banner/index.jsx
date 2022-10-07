import React from "react";
import { Blur, Container, Content } from "./style";
import img1 from "../../assets/img/house1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../Generic/Button";

const Banner = () => {
  return (
    <Container>
      <LazyLoadImage src={img1} effect="blur" />
      <Blur />
      <Content>
        <Content.Title>Skyper pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;
