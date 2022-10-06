import { Container, Content, Details, Img, Icons, Divider } from "./style";
import noPhoto from "../../../assets/img/noimg.jpeg";

const HouseCard = ({ data = {} }) => {
  const {
    address,
    city,
    country,
    description,
    houseDetails,
    price,
    salePrice,
    attachments,
    category,
  } = data;

  // console.log(data, "data");

  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noPhoto} />
      <Content>
        <div className="subTitle">
          {city?.substring(0, 10)}, {country?.substring(0, 10)},{" "}
          {description?.substring(0, 10) + "..."} -{" "}
        </div>
        <div className="info">
          {address || "Quincy ST, Brooklyn, NY, USA"} -{" "}
          {category?.name || "No Category"} {houseDetails.room || 0}-rooms
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.bed || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${price || "0"} / mo</div>
          <div className="subTitle">${salePrice || "0"} / mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
