
import React from 'react';

import BlogItem from './BlogItem';

import { Segment } from 'semantic-ui-react'


class BlogList extends React.Component {
  render(){
    const {addLike, records, ids} = this.props;
    return (     
      <div>
        { records.map((item)=>(<Segment><BlogItem {...item} key={item.id} addLike = {addLike} ids={ids} /></Segment>))}
      </div>
    )
  }
}

export default BlogList;