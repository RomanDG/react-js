import React from 'react';
import {connect} from 'react-redux';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';


const LikeBtnContainer = (props) => (
  <LikeBtn {...props} />
);

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  qty: state.posts.posts[ownProps.id - 1].metaData.currentLike,
  addLike: ownProps.addLike
});

export default connect(mapStateToProps)(LikeBtnContainer);