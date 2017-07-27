import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import BlogList from 'components/widgets/blog/BlogList';
import Search from 'components/widgets/blog/Search';
import PieChart from 'components/widgets/blog/PieChart';
import {connect} from 'react-redux';

import {fetchPosts, addPieChartData} from 'actions/Posts';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundPosts: []
    };

    this.search = this.search.bind(this);
    this.addLike = this.addLike.bind(this);
  }

  componentDidMount() {
    if (this.props.router == '/') {
      this.props.fetchPosts();
    }
  }

  search(e) {
    if (e.currentTarget.value.toString() != '') {
      const posts = this.props.PostsData.filter((item) => (item.title.toLowerCase().indexOf(e.currentTarget.value.toString().toLowerCase()) != -1));
      this.setState({foundPosts: posts});
    } else {
      this.setState({foundPosts: []});
    }
  }

  addLike(e) {
    const data = [];
    const id = e.currentTarget.id;
    if (this.props.PieChartData.length == 0) {
      for (const [index, value] of this.props.PostsData.entries()) {
        data.push({label: value.title, value: value.id == id ? value.metaData.currentLike + 1 : value.metaData.currentLike});
      }
      this.props.addPieChartData(data);
    } else {
      for (const [index, value] of this.props.PieChartData.entries()) {
        data.push({label: value.label, value: index == id - 1 ? value.value + 1 : value.value});
      }
      this.props.addPieChartData(data);     
    }
  }


  render() {
    return (
      <Grid.Row>
        <Grid.Column widescreen={11}>
          <Segment>
            <BlogList foundPosts={this.state.foundPosts} addLike={this.addLike} /> 
          </Segment>
        </Grid.Column>
        <Grid.Column widescreen={5}>
          <Segment>
            <Search goSearch={this.search} />
          </Segment>
          <Segment>
            <PieChart />
          </Segment>          
        </Grid.Column>
      </Grid.Row>
    );   
  }

  static get propTypes() {
    return {
      map: PropTypes.func,
      router: PropTypes.string,
      PostsData: PropTypes.array,
      PieChartData: PropTypes.array,
      fetchPosts: PropTypes.func,
      addPieChartData: PropTypes.func
    };
  }
}

const mapStateToProps = (state) => ({
  PostsData: state.posts.PostsData,
  PieChartData: state.posts.PieChartData,
  router: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  addPieChartData: (data) => dispatch(addPieChartData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);