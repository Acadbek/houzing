import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  name,
  value,
  width,
  height,
  fontSize,
  onChange,
  placeholder,
  defaultValue,
}) => {
  return (
    <Container
      type={type}
      name={name}
      width={width}
      value={value}
      height={height}
      onChange={onChange}
      fontSize={fontSize}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
