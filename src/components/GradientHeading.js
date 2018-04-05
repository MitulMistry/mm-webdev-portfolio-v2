import React from 'react';
import PropTypes from 'prop-types';

export const GradientHeading = (props) => { // stateless functional component
  let text = props.text;

  return (
    <div className="gradientHeading">
      <h1>{text}</h1>
    </div>
  );
}

GradientHeading.propTypes = {
  text: PropTypes.string
};