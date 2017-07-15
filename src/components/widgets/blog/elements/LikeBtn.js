import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';


const LikeBtn = ({addLike, id, ids}) => (
  
  <Feed onClick={addLike} id={id}>
    <Feed.Event>
      <Feed.Content>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
            {ids[id - 1]} Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  
);

LikeBtn.propTypes = {
  addLike: PropTypes.func,
  id: PropTypes.number,
  ids: PropTypes.array
};

export default LikeBtn;