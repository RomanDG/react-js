import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import BlogList from 'components/widgets/blog/BlogList';
import Search from 'components/widgets/blog/Search';
import PieChart from 'components/widgets/blog/PieChart';
import {connect} from 'react-redux';

import {fetchPosts} from 'actions/Posts';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundPosts: []
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    if (this.props.router == '/') {
      this.props.fetchPosts();
    }
  }

  search(e) {
    if (e.currentTarget.value.toString() != '') {
      const posts = this.props.posts.filter((item) => (item.title.toLowerCase().indexOf(e.currentTarget.value.toString().toLowerCase()) != -1));
      this.setState({foundPosts: posts});
    } else {
      this.setState({foundPosts: []});
    }
  }


  render() {
    return (
      <Grid.Row>
        <Grid.Column widescreen={11}>
          <Segment>
            <BlogList foundPosts={this.state.foundPosts}/> 
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
      idp: PropTypes.number,
      router: PropTypes.string,
      posts: PropTypes.array,
      fetchPosts: PropTypes.func
    };
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.entries,
  router: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);