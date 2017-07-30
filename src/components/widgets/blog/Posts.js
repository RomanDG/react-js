import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';


class Posts extends React.Component {  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.router == '/' && this.props.posts.length == 0) {
      this.props.fetchPosts();
    }
  }

  render() {
    const {posts} = this.props;
    return (
      <Item.Group>
        {posts}
      </Item.Group>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  router: PropTypes.string
};

export default Posts;