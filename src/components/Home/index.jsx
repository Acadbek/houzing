import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import Container from "./style";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Recent />
      <Banner />
    </Container>
  );
};

export default Home;
