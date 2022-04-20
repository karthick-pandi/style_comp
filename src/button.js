import styled from "styled-components";

const Button = styled.button`
  margin-left: 10px;
  padding: 10px;
  margin-top: 10px;
  background-color: ${(props) =>
    props.primary === "primary" ? "blue" : "white"};
  color: ${(props) => (props.primary === "primary" ? "white" : "")};
  color: ${(props) => (props.link === "link" ? "blue" : "")};
  border: ${(props) =>
    props.link === "link" ||
    props.text === "text" ||
    props.primary === "primary"
      ? "none"
      : ""};
  border: ${(props) => (props.dash === "dash" ? "dashed" : " ")};
`;
export { Button };
