import {connect} from 'react-redux';
import Posts from 'components/widgets/blog/Posts';
import {fetchPosts} from 'actions/Posts';
import { Item } from 'semantic-ui-react';
import {getPosts} from 'components/helpers/GetPosts'


const mapStateToProps = (state) => ({
  posts:  getPosts(state),
  router: state.router.location.pathname
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);