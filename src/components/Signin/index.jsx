import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import { Container, Content } from "./style";
import { message } from "antd";

const Signin = () => {
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);

  const info = (type, text) => {
    message[type](text);
  };

  const navigate = useNavigate();

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
    setError(false);
  };
  const post = () => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.authenticationToken) {
          localStorage.setItem("token", res?.authenticationToken);
          info("info", "Success");
          navigate("/home");
        } else {
          info("info", "Error");
        }
      });
  };

  return (
    <Container>
      <Content>
        <div className="subTitle">Sign in</div>
        <Input
          type="email"
          onChange={onChange}
          name="email"
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={onChange}
          name="password"
          placeholder="Password"
        />
        <Button onClick={post} width={"100%"}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Signin;
