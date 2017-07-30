import React from 'react';
import {connect} from 'react-redux';
import Posts from 'components/widgets/blog/Posts';
import Post from 'components/widgets/blog/Post';
import {fetchPosts} from 'actions/Posts';
import { Item } from 'semantic-ui-react';


const PostsContainer = (props) => (
  <Posts {...props} />
);

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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);