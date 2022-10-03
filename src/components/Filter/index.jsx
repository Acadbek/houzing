import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Button, Input } from "../Generic";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const query = useSearch();

  // variables
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  console.log(query.get("country"));

  const onChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    console.log(params, "params");
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          defaultValue={query.get("city")}
          onChange={onChange}
          ref={cityRef}
          name="address"
          placeholder="Address"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip Code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizeRef} placeholder="Size" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown trigger={"click"} overlay={menu} placement="bottomRight" arrow>
        <div>
          <Button type={"light"}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
