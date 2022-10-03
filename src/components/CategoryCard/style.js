import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  border-radius: 3px;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  border-radius: 3px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
`;

const Icons = styled.div``;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Icons, Divider, Blur };
