import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Link, Logo, Main, Menu, Section, Wrapper } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";
import Footer from "../Footer";
import { Dropdown } from "antd";

const Navbar: React.FC = () => {
  const menu = (
    <Menu>
      <Menu.Item>HOME</Menu.Item>
      <Menu.Item>asd</Menu.Item>
      <Menu.Item>asdas</Menu.Item>
    </Menu>
  );

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
                <Dropdown
                  overlay={menu}
                  placement="topRight"
                  arrow={{ pointAtCenter: true }}
                  trigger="click"
                >
                  <Button type={"dark"}>
                    <div>Profile</div>
                  </Button>
                </Dropdown>
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
