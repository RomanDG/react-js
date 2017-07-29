import React, {PropTypes} from 'react';
import { Input } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {searchPosts} from 'actions/Posts';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(e) {
    if (e.currentTarget.value.toString() != '') {
      const string = e.currentTarget.value.toString();
      this.props.searchPosts(string);
    } else {
        this.props.searchPosts(null);
    }
  }

  componentDidMount() {
    this.props.searchPosts(null);
  }

  render() {
    return (
      <Input onChange={this.search} fluid icon='search' placeholder='Search...' />
    );
  }
}

Search.propTypes = {
  posts: PropTypes.array,
  searchPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  searchPosts: (string) => dispatch(searchPosts(string))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);