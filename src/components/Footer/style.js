import styled from "styled-components";
import { ReactComponent as message } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as map } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as calc } from "../../assets/icons/calculator.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";

const Wrapper = styled.div`
  background-color: #0d253b;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  padding: 48px 0;
`;

const Container = styled.div`
  width: 100%;
  @media (max-width: 599px) {
    padding: 96px 20px;
  }
  .slick-next {
    font-size: 25px;
  }
  .slick-next::before {
    color: black;
  }
  .slick-prev::before {
    color: black;
  }
`;

const Content = styled.div`
  /* margin-bottom: 32px; */
  display: flex;
  justify-content: space-around;
  flex-direction: ${({ top }) => (top ? "column" : "row")};
  gap: ${({ bottom }) => (bottom ? "40px" : "")};
`;

Content.Title = styled.div`
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  color: #fff;
  margin-top: 15px;
  margin-bottom: 20px;
`;

Content.Item = styled.div`
  text-align: start;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
`;

const Icon = styled.div``;
Icon.House = styled(house)``;
Icon.Map = styled(map)``;
Icon.Calc = styled(calc)``;
Icon.Message = styled(message)`
  & path {
    fill: blue;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
`;

Section.Title = styled.p`
  color: red;
  font-weight: 700;
  color: black;
  font-size: 17px;
`;

Section.Desc = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: gray;
  font-size: ${({ top }) => (top ? "17px" : "")};
  text-align: ${({ top }) => (top ? "center" : "justify")};
`;
export { Container, Wrapper, Content, Section, Icon };
