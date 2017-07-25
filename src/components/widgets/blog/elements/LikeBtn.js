import React from 'react';
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {addData, Initialize} from 'actions/PieChart';

const LikeBtn = ({id, addData, posts, Initialize, piechartData, piechartInit}) => (
  <div>
    <Feed onClick={() => BtnClk(posts, id, addData, Initialize, piechartData, piechartInit)} id={id}>
      <Feed.Event>
        <Feed.Content>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              {piechartData.length != 0 ? piechartData[id - 1].value : 0} Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>  
  </div>
);

const BtnClk = (posts, id, addData, Initialize, piechartData, piechartInit) => {
  const data = [];
  if (piechartInit == false) {
    for (const [index, value] of posts.entries()) {
      data.push({label: value.title, value: value.id == id ? value.metaData.currentLike + 1 : value.metaData.currentLike});
    }
    Initialize();
    addData(data);
  } else {
    for (const [index, value] of piechartData.entries()) {
      data.push({label: value.label, value: index == id - 1 ? value.value + 1 : value.value});
    }
    addData(data);     
  }
};

LikeBtn.propTypes = {
  id: PropTypes.number,
  posts: PropTypes.array,
  piechartInit: PropTypes.bool,
  piechartData: PropTypes.array,
  addData: PropTypes.func,
  Initialize: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.entries,
  piechartInit: state.piechart.isInitiated,
  piechartData: state.piechart.data,
  id: ownProps.id,
});

const mapDispatchToProps = (dispatch) => ({
  addData: (data) => dispatch(addData(data)),
  Initialize: () => dispatch(Initialize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeBtn);