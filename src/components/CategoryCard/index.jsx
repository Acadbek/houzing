import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/img/noimg.png";

const CategoryCard = ({ data = [], onClick }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Blur />
      <Img src={noimg} />
      <Content>{name || "empty"}</Content>
    </Container>
  );
};

export default CategoryCard;
