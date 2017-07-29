import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';


const LikeBtn = ({id, addLike, qty}) => (
  <div>
    <Feed onClick={addLike} id={id}>
      <Feed.Event>
        <Feed.Content>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              {qty} Likes 
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>  
  </div>
);

LikeBtn.propTypes = {
  id: PropTypes.number,
  qty: PropTypes.number,
  addLike: PropTypes.func,
};

export default LikeBtn;