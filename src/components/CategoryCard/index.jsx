import { Blur, Container, Content, Img } from "./style";
import noimg from "../../assets/img/noimg.png";

const CategoryCard = ({ data = [] }) => {
  const { name } = data;
  return (
    <Container>
      <Img src={noimg} />
      <Blur />
      <Content>{name || "empty"}</Content>
    </Container>
  );
};

export default CategoryCard;
