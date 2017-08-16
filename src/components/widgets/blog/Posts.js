import React from 'react';
import PropTypes from 'prop-types';
import Post from 'components/widgets/blog/Post';
import { Item } from 'semantic-ui-react';


class Posts extends React.Component {  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.router == '/') {
      //this.props.fetchPosts();
    }
  }

  render() {
    const {posts} = this.props;
    return (
      <Item.Group>
        {posts.filter(item => item != undefined).map((post) => ( <Item key={post.id.toString()}><Post {...post} /></Item> ))}
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