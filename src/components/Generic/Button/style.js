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
        border: "solid 1px #0061DF",
        color: "#0061DF",
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

const setWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return `${width}%`;
  else return `${width}px`;
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
  width: ${setWidth};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "17px")};
  ${getType}
  :active {
    opacity: 0.7;
  }
`;

export { Container };
