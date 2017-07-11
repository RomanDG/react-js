import React from 'react';
import PropTypes from 'prop-types';

const Image = ({alt, src, width, height}) => (
  <img 
    src={src} 
    alt={alt}
    style={{
      width: {width},
      height: {height},
      float: 'left',
      margin: '5px 5px 5px 0'
    }}
  />
);

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Image;