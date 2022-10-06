import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  /* margin-top: 95px; */
`;

const Container = styled.div`
  max-width: 1440px;

  width: 100%;
  padding: 96px 130px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export { Container, Wrapper, Content };
