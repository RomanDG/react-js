import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';

class LikeBtnContainer extends React.Component {
  constructor(props) {
    super(props);
  }
    

  render() {
    const {id, addLike, posts} = this.props;
    return (
      <LikeBtn qty={this.props.posts[this.props.id - 1].metaData.currentLike} id={id} addLike={addLike} />
    );
  }
}

LikeBtnContainer.propTypes = {
  qty: PropTypes.number,
  id: PropTypes.number,
  addLike: PropTypes.func,
  posts: PropTypes.array
};

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts.posts,
  id: ownProps.id,
  addLike: ownProps.addLike
});

export default connect(mapStateToProps)(LikeBtnContainer);