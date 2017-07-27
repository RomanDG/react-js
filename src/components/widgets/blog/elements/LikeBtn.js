import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';

import {connect} from 'react-redux';

const LikeBtn = ({id, addLike, PieChartData}) => (
  <div>
    <Feed onClick={addLike} id={id}>
      <Feed.Event>
        <Feed.Content>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              {PieChartData.length != 0 ? PieChartData[id - 1].value : 0} Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>  
  </div>
);

LikeBtn.propTypes = {
  id: PropTypes.number,
  PieChartData: PropTypes.array,
  addLike: PropTypes.func,
};


const mapStateToProps = (state, ownProps) => ({
  PieChartData: state.posts.PieChartData,
  id: ownProps.id
});

export default connect(mapStateToProps)(LikeBtn);