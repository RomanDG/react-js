
import React from 'react';

import { Button } from 'semantic-ui-react';


const LikeBtn = ({addLike, id, ids}) => {
  return (
      <span>
        <Button
        	content='Like'
        	icon='heart'
        	label={
        		{ 
        			as: 'a', 
        			basic: true, 
        			content: ids[id-1]
        		}
        	}
        	labelPosition='right'
        	onClick={addLike} 
        	id={id} />
      </span> 
  )
};

export default LikeBtn;