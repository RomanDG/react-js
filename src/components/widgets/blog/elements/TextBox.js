
import React from 'react';


class TextBox extends React.Component {
  render(){
    const {text} = this.props;
    return (
      <span>
        {text}
      </span>
    );
  }
};

export default TextBox;