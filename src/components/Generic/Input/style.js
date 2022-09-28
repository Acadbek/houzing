import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "solid 1px #fff",
        color: "#fff",
      };
    case "light":
      return {
        background: "#fff",
        border: "solid 1px #e6e9ec",
        color: "#od263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 120px;
  color: black;
  outline: none;
  font-size: 14px;
  border: 1px solid var(--colorPrimary);
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "17px")};
  /* ${getType} */
`;

export { Container };
