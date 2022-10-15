import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "../Generic";
import {
  Container,
  Content,
  Description,
  Details,
  Icon,
  Section,
  User,
  Wrapper,
} from "./style";
import noImg from "../../assets/img/nouser.jpeg";
import YandexMap from "../Generic/Maps";
const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    params?.id &&
      fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params.id}`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response, "response");
          setData(response?.data || {});
          window.scrollTo(0, 0)
        });
    console.log(data, "data");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title className="title">{data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex={"true"}>
              <Icon.Share /> <Icon.Title>Share</Icon.Title>
              <Icon.Love /> <Icon.Title>Save</Icon.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icon.Bed />
              <Details.Title>Bed {data?.houseDetails?.bed || 0}</Details.Title>
              <Icon.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icon.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}
              </Details.Title>
              <Icon.Ruler />
              <Details.Title>
                Ruler {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>{data?.price || 0}</del>
                <h1 className="title">${data?.salePrice || 0}</h1>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                ${data?.user?.firstName || ""}
              </div>
            </Content>
          </Section>
          <Content.Title desc={"true"}>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title mt={48} mb desc={"true"}>
            Locations
          </Content.Title>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={data?.img || noImg} />
            <Content style={{ alignItems: "flex-start" }}>
              <div className="subTitle">Name</div>
              <div className="info">94 496 55 66</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send Request</Button>
        </Container>
      </Wrapper>
      <YandexMap />
    </React.Fragment>
  );
};

export default HouseItem;
