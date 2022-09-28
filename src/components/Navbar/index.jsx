import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Logo, Section, Wrapper } from "./style";

import logoImg from "../../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Logo src={logoImg} />
        </Section>
        <Section>1</Section>
        <Section>1</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
