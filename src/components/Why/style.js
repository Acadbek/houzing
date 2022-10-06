import styled from "styled-components";
import { ReactComponent as message } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as map } from "../../assets/icons/cardMaps.svg";
import { ReactComponent as calc } from "../../assets/icons/calculator.svg";
import { ReactComponent as house } from "../../assets/icons/cardHouse.svg";
import { icons } from "antd/lib/image/PreviewGroup";

const Wrapper = styled.div`
  /* max-width: 1440px; */
  /* width: 100%;
  margin: auto; */
  background-color: #f5f7fc;
`;

const Container = styled.div`
  /* max-width: 1440px; */

  width: 100%;
  padding: 96px 130px;
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
  margin-bottom: 32px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ top }) => (top ? "column" : "row")};
  gap: ${({ bottom }) => (bottom ? "40px" : "")};
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
  align-items: center;
  width: 230px;
`;

Section.Title = styled.p`
  color: red;
  margin-bottom: 0;
  margin-top: 15px;
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
