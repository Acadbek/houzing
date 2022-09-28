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

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  cursor: pointer;
  min-width: 120px;
  font-size: 14px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "17px")};
  ${getType}
  :active {
    opacity: 0.7;
  }
`;

export { Container };
