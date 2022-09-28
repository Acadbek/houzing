import React from "react";
import { Container } from "./style";

const Button = ({ type, width, height, children, fontSize, onClick }) => {
  return (
    <Container
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      fontSize={fontSize}
    >
      {children || "Generic button"}
    </Container>
  );
};

export default Button;
