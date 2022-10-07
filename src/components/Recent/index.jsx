import React from "react";
import Slider from "react-slick";
import HouseCard from "../Generic/HouseCard";
import { useState } from "react";
import { Container, Content, Wrapper } from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Recent = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    infinity: true,
    className: "center",
    centerMode: true,
    slidesToShow: 3,
  };
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Content>
          <h2 className="title">Recent Properties for Rent</h2>
          <p className="info">
            Located in a small village in Surrey in the United Kingdom, Updown
            Court is the most beautiful house.
          </p>
        </Content>
        <Slider {...settings}>
          {data.map((value) => {
            return (
              <HouseCard
                gap={20}
                data={value}
                key={value?.id}
                onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              />
            );
          })}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default Recent;
