import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';


const LikeBtn = ({addLike, id, ids}) => (
  <span>
    <Button
      content='Like'
      icon='heart'
      label={
        { 
          as: 'a', 
          basic: true, 
          content: ids[id - 1]
        }
      }
      labelPosition='right'
      onClick={addLike} 
      id={id} />
  </span> 
);

LikeBtn.propTypes = {
  addLike: PropTypes.func,
  id: PropTypes.number,
  ids: PropTypes.array
};

export default LikeBtn;