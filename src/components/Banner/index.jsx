import React from "react";
import { Blur, Container, Content } from "./style";
import img1 from "../../assets/img/house1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../Generic/Button";

const Banner = () => {
  return (
    <Container>
      <LazyLoadImage width={"100%"} src={img1} effect="blur" />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home{" "}
          <br />
          the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default Banner;
