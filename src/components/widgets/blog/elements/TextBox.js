import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({text}) => (
  <span>
    {text}
  </span>
);

TextBox.propTypes = {
  text: PropTypes.string
};

export default TextBox;