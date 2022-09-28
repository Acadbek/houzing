import React from "react";
import { Container } from "./style";
import { Button, Input } from "../Generic";

const Filter = () => {
  return (
    <Container>
      <Input />
      <Button>Advanced</Button>
      <Button>Search</Button>
    </Container>
  );
};

export default Filter;
