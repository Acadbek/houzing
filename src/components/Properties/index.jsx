import React, { useEffect, useState } from "react";
import HouseCard from "../Generic/HouseCard";
import { Container } from "./style";
import { useLocation } from "react-router-dom";

const Properties = () => {
  const [data, setData] = useState();
  const { REACT_APP_BASE_URL: url } = process.env;

  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  return (
    <Container>
      {data?.map((value) => (
        <HouseCard key={value?.id} data={value} />
      ))}
    </Container>
  );
};

export default Properties;
