import React from "react";
import { Wrapper, Content } from "./Grid.styles";
import PropTypes from "prop-types";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.prototypes  = {
    header: PropTypes.string
};

export default Grid;