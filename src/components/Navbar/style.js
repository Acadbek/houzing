import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  height: 64px;
  padding: var(--padding);
  color: white;
  background-color: var(--colorPrimary);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #008DD5;
  }
`;

const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: white;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;

export { Container, Wrapper, Section, Logo, Link };

// 6
