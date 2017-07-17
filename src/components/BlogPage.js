import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Grid } from 'semantic-ui-react';
import BlogList from 'components/widgets/blog/BlogList';
import Search from 'components/widgets/blog/Search';
import PieChart from 'components/widgets/blog/PieChart';
const request = require('superagent');


class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      size: null,
      posts: []
    };

    this.data = [];
    this.mass = [];
    
    this.like = this.like.bind(this);
    this.search = this.search.bind(this);
    this.resize = this.resize.bind(this);
  }

  fetchPosts() {
    const promise = new Promise((resolve, reject) => {
      request.get(
        'http://localhost:3001',
        {},
        (err, res) => {
          err ? reject(err) : resolve(res.body);
        }
      );      
    });

    promise.then((res) => {
      this.setState({posts: res});

      this.data = this.state.data;
      this.state.posts.map((item) => {
        this.data.push({label: item.title, value: item.metaData.currentLike});
        this.mass.push(item.metaData.currentLike);
      });
      this.setState({data: this.data});
      

      if (this.props.idp) {
        const posts = this.state.posts.filter((item) => (item.id == this.props.idp));
        this.setState({posts});
      }
    });
  }

  componentDidMount() {
    this.fetchPosts();
    window.onresize = () => (this.setState({size: this.refs.piechart.offsetWidth}));
  }


  like(e) {
    const data = this.state.data;
    data[e.currentTarget.id - 1].value += 1;
    this.setState({data});
    this.mass = data.map((item) => (item.value));
    this.resize();
  }


  search(e) {
    if (e.currentTarget.value.toString() != '') {
      const posts = this.state.posts.filter((item) => (item.title.toLowerCase().indexOf(e.currentTarget.value.toString().toLowerCase()) != -1));
      this.setState({posts});
    }    
  }

  resize() {
    this.setState({size: this.refs.piechart.offsetWidth});
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column widescreen={11}>
          <Segment>
            <BlogList  addLike = {this.like} posts = {this.state.posts} ids={this.mass}/>
          </Segment>
        </Grid.Column>
        <Grid.Column widescreen={5}>
          <Segment>
            <Search goSearch={this.search} />
          </Segment>
          <Segment>
            <div ref='piechart'>
              <PieChart data={this.state.data} size={this.state.size} />
            </div>
          </Segment>          
        </Grid.Column>
      </Grid.Row>
    );   
  }

  static get propTypes() {
    return {
      map: PropTypes.func,
      idp: PropTypes.number
    };
  }
}

export default BlogPage;