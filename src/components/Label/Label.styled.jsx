import styled from "styled-components";

const colors = ["#231123", "#82204A", "#226CE0", "#1C2826", "#D64550"];

export const LabelContainer = styled.div`
  background-color: ${() => colors[Math.floor(Math.random() * colors.length)]};
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  margin: 0 10px 0 0;
`;
