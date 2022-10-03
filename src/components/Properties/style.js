import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: var(--padding);
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  margin: auto;
  max-width: 1440px;
  width: 100%;
`;

export { Container };
