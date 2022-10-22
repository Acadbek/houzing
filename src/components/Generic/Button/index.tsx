import React from "react";
import { Container } from "./style";

interface Props {
  type?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  fontSize?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  type,
  width,
  height,
  children,
  fontSize,
  onClick,
}) => {
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
