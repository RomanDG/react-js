import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import {connect} from 'react-redux';


const BlogList = (props) => {  
  let [blogItems, routeItems, findItems] = [false,false,false];
  blogItems = props.PostsData.map((item) => (
    <Item key={item.id.toString()}>
      <BlogItem {...item} addLike = {props.addLike}/>
    </Item>
  ));

  if (props.router != '/') {
    routeItems = blogItems[Number((props.router).replace(/\D+/g,'')) - 1];
  } else if (props.foundPosts.length != 0) {
    findItems = props.foundPosts.map((item) => (
      <Item key={item.id.toString()}>
        <BlogItem {...item} addLike = {props.addLike}/>
      </Item>
    ));
  }

  return (
    <Item.Group>
      {routeItems || findItems || blogItems}
    </Item.Group>
  );
};

BlogList.propTypes = {

  PostsData: PropTypes.array,
  router: PropTypes.string,
  foundPosts: PropTypes.array,
  addLike: PropTypes.func,
  map: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  PostsData: state.posts.PostsData,
  router: state.router.location.pathname,
  foundPosts: ownProps.foundPosts,
  addLike: ownProps.addLike
});

export default connect(mapStateToProps)(BlogList);