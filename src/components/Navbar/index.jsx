import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Section, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo /> <h2>Houzing</h2>
        </Section>
        <Section>
          {navbar.map(({ title, path, id }) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={id}
                to={path}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>sing in</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
