import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: fit-content;
  margin-top: 10px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  cursor: pointer;
  z-index: 500;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
`;

Content.Desc = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: white;
  font-size: 18px;
`;

Content.Price = styled.h2`
  font-size: 28px;
  line-height: 37px;
  font-weight: 600;
  letter-spacing: -0.02;
  color: white;
  margin-top: 20px;
`;

export { Container, Arrow, Img, Blur, Content };
