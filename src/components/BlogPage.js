import React from 'react';
import PropTypes from 'prop-types';
import BlogList from 'components/widgets/blog/BlogList';
import PieChart from 'components/widgets/blog/PieChart';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.data = [];
    this.mass = [];
    
    this.like = this.like.bind(this);
  }

  componentDidMount(){
    this.data = this.state.data;
    this.props.records.map((item) => {
      this.data.push({label: item.title, value: item.metaData.currentLike});
      this.mass.push(item.metaData.currentLike);
    });
    this.setState({data: this.data});
  }

  like(e) {
    const data = this.state.data;
    data[e.currentTarget.id - 1].value += 1;
    this.setState({data});
    this.mass = data.map((item) => (item.value));
  }

  render() {
    return (
      <div>
        <BlogList  addLike = {this.like} {...this.props} ids={this.mass}/>
        <PieChart data={this.state.data} />
      </div>
    );   
  }

  static get propTypes() {
    return {
      records: PropTypes.array,
      map: PropTypes.func      
    };
  }
}

export default BlogPage;