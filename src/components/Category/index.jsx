import React from "react";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { useState } from "react";
import { Container } from "./style";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Category = () => {
  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
  };
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard
              data={value}
              key={value.id}
              onClick={() => navigate(`/properties?category=${value.id}`)}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
