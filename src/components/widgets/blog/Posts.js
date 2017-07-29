import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {fetchPosts} from 'actions/Posts';


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
    return (
      <Item.Group>
        {this.props.posts}
      </Item.Group>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  router: PropTypes.string
};

const mapStateToProps = (state) => ({

  posts:  state.router.location.pathname == '/' && state.posts.searchStr == null ?
    state.posts.posts.map((post) => (
      <Item key={post.id.toString()}>
        <Post {...post} />
      </Item>
    )) :  state.posts.searchStr == null ?
      state.posts.posts.map((post) => {
        if (post.id == Number((state.router.location.pathname).replace(/\D+/g,''))) {
          return  <Item key={post.id.toString()}>
            <Post {...post} />
          </Item>;
        }
      }) :
      state.posts.posts.map((post) => {
        if (post.title.toLowerCase().includes(state.posts.searchStr.toLowerCase()) == true) {
          return  <Item key={post.id.toString()}>
            <Post {...post} />
          </Item>;
        }
      })
  ,
  router: state.router.location.pathname

});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);