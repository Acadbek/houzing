import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Container from "./style";
import Recommended from "../Recommended";
import Why from "../Why";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
    </Container>
  );
};

export default Home;
