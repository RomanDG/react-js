import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';


const BlogList = ({addLike, posts, ids}) => {   
  const blogItems = posts.map((item) => (
    <Item key={item.id.toString()}>
      <BlogItem {...item} addLike = {addLike} ids={ids} />
    </Item>
  ));

  return (
    <Item.Group>
      {blogItems}
    </Item.Group>
  );
};

BlogList.propTypes = {
  addLike: PropTypes.func,
  posts: PropTypes.array,
  ids: PropTypes.array
};

export default BlogList;