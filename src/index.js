import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const Welcome = props => <h1>Hello, {props.name}</h1>;

Welcome.propTypes = {
  name: PropTypes.string
};

render(<Welcome name="Rami" />, document.getElementById("wrapper"));
