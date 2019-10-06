import React from "react";
import PropTypes from "prop-types";
import {LabelContainer} from "./Label.styled";

const Label = ({children}) => <LabelContainer>{children}</LabelContainer>;

Label.propTypes = {
  children: PropTypes.node
};

export default Label;
