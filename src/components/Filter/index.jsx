import React, { useEffect, useRef, useState } from "react";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Button, Input } from "../Generic";
import { Dropdown } from "antd";
import { uzeReplace } from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const roomsRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`${location?.pathname}${uzeReplace("sort", sort)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((response) => response.json())
      .then((response) => {
        setData(response?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    d?.name && setValue(d?.name);
    !query.get("category_id") && setValue("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
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
        <Input
          name="room"
          onChange={onChange}
          ref={roomsRef}
          defaultValue={query.get("rooms")}
          placeholder="Rooms"
        />
        <SelectAnt
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>All</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
        </SelectAnt>
        <SelectAnt value={value} onChange={onChangeCategory}>
          <SelectAnt.Option value={""}>All</SelectAnt.Option>
          {data.map((value) => {
            return (
              <SelectAnt.Option key={value.id} value={value?.id}>
                {value?.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          name="min_price"
          onChange={onChange}
          ref={minPriceRef}
          placeholder="Min price"
        />
        <Input
          name="max_price"
          onChange={onChange}
          ref={maxPriceRef}
          placeholder="Max price"
        />
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
