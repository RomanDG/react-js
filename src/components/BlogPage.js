
import React from 'react';

import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';


class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      ids: [],
      titles: []

    }

    this.props.records.map((item) => {
      this.state.ids.push(item.metaData.currentLike);
      this.state.titles.push(item.title);
    })

    this.like = this.like.bind(this);
    
  }

  like(e){
    const value = this.state.ids;
    value[e.currentTarget.id-1] += 1;
    this.setState({ids: value});
  }

  render(){
    return (
      <div>
        <BlogList  addLike = {this.like} {...this.props} ids={this.state.ids}/>
        <PieChart titles={null} ids={null} />
      </div>
    )   
  }
};

export default BlogPage;