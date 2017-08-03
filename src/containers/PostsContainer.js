import {connect} from 'react-redux';
import Posts from 'components/widgets/blog/Posts';
import {fetchPosts} from 'actions/Posts';
import { Item } from 'semantic-ui-react';

const allPosts = (posts, pathName, searchString) => {
  if(pathName == '/' && searchString == null){
    return posts.map((post) => post )
  }
  return false;
} // получение всех постов

const onePost = (posts, pathName, searchString) => {
  if(pathName != '/' && searchString == null){
    return posts.map((post) => {
        if (post.id == Number((pathName).replace(/\D+/g,''))) {
          return post;
        }
    })
  }
  return false;
} // получение поста по url

const foundPosts = (posts, searchString) => {
  if(searchString != null){
    return posts.map((post) => {
      if (post.title.toLowerCase().includes(searchString.toLowerCase()) == true) {
        return post;
      }
    })
  }
  return false;
} // получение постов по поиску

const mapStateToProps = (state) => ({
  posts:  allPosts(state.posts.posts, state.router.location.pathname, state.posts.searchStr) || 
          onePost(state.posts.posts, state.router.location.pathname, state.posts.searchStr) || 
          foundPosts(state.posts.posts, state.posts.searchStr),
  router: state.router.location.pathname
}); 

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);