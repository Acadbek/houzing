import React, { useEffect, useState } from "react";
import HouseCard from "../Generic/HouseCard";
import { Container } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const Properties = () => {
  const [data, setData] = useState();
  const { REACT_APP_BASE_URL: url } = process.env;

  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "res");
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // const request = useRequest();
  // useEffect(() => {
  //   request({ url: `/houses/list${search}` })
  //     .then((res) => {
  //       console.log(res, "res");
  //       setData(res?.data || []);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <React.Fragment>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: "center" }}>
        Azon va Shinam qimmat uylar
      </div>
      <Container>
        {data?.map((value) => (
          <HouseCard
            onClick={() => onSelect(value.id)}
            key={value?.id}
            data={value}
          />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Properties;
