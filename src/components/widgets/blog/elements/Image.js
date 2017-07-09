
import React from 'react';


class Image extends React.Component {
  render(){
      const {alt, src, width, height} = this.props.img;
      return (
        <img 
          src={src} 
          alt={alt}
          style={{
            width: {width},
            height: {height},
            float: "left",
            margin: "5px 5px 5px 0"
          }}
        />
      );
  }
};

export default Image;