import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      icon,
      type,
      name,
      value,
      width,
      height,
      fontSize,
      onChange,
      placeholder,
      defaultValue,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
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
      </Wrapper>
    );
  }
);

export default Input;
