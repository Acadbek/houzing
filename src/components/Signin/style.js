import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 100%;
  background-color: #e6e9ec;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 30px;
  width: 100%;
  max-width: 580px;
  background-color: white;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin: 59px;
`;
export { Container, Content };
