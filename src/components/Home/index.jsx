import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Container from "./style";
import Recommended from "../Recommended";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Category />
    </Container>
  );
};

export default Home;
