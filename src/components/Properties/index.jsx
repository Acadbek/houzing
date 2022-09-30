import React, { useEffect, useState } from "react";
import HouseCard from "../Generic/HouseCard";
import { Container } from "./style";

const Properties = () => {
  const [data, setData] = useState();
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res, "res");
        setData(res?.data);
      });
  }, [url]);

  return (
    <Container>
      {data?.map((value) => (
        <HouseCard key={value?.id} data={value} />
      ))}
    </Container>
  );
};

export default Properties;
