import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((response) => response.json())
      .then((response) => setData(response?.data || []));
  }, []);
  return (
    <Container>
      <Slider slidesToShow={3} arrows={true} dots={true} autoplay={true}>
        {data.map((value) => {
          return (
            <CategoryCard
              data={value}
              key={value.id}
              onClick={() => navigate(`/properties?categoty=${value.name}`)}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
