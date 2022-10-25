import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Main, Section, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";

const Navbar: React.FC = () => {
  let token: string = localStorage.getItem("token")!;

  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h2>Houzing</h2>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <>
                <Button onClick={() => navigate("/")} type={"dark"}>
                  Profile
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("signin")} type={"dark"}>
                Sign in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
