import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: fit-content;
  margin: auto;
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
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export { Container, Img, Blur, Content };
