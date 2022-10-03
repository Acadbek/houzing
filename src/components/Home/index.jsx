import React from "react";
import Carousel from "../Carousel";
import HouseCard from "../Generic/HouseCard";
import Category from "../Category";
import Container from "./style";

const Home = () => {
  return (
    <Container>
      <Carousel />
      {/* <HouseCard /> */}
      <Category />
    </Container>
  );
};

export default Home;
