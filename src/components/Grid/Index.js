import React from "react";
import { Wrapper, Content } from "./Grid.styles";

export const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);
