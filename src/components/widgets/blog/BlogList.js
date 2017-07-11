import React from 'react';
import BlogItem from './BlogItem';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';


const BlogList = ({addLike, records, ids}) => {    
  const blogItems = records.map((item) => (
    <Segment key={item.id.toString()}>
      <BlogItem {...item} addLike = {addLike} ids={ids} />
    </Segment>
  ));

  return (
    <div>
      {blogItems}
    </div>
  );
};

BlogList.propTypes = {
  addLike: PropTypes.func,
  records: PropTypes.array,
  ids: PropTypes.array
};

export default BlogList;