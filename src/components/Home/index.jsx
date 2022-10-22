import React from "react";
import Carousel from "../Carousel/index.tsx";
import Category from "../Category";
import Container from "./style";
import Recommended from "../Recommended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner/index.tsx";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
