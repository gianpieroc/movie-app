import React from "react";
import styled from "styled-components";

const colors = ["#231123", "#82204A", "#226CE0", "#1C2826", "#D64550"];

const LabelContainer = styled.div`
  background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  padding: 20px;
`;

const Label = ({ children }) => <LabelContainer>{children}</LabelContainer>;

export default Label;
