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
      w: null,
      h: null,
      r: null,
      records: [],
      posts: []
    };

    this.data = [];
    this.mass = [];
    this.posts = [];
    
    this.like = this.like.bind(this);
    this.search = this.search.bind(this);
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
      //const size = this.refs.piechart.offsetWidth;
      
      this.setState({w: this.refs.piechart.offsetWidth});
      this.setState({h: this.refs.piechart.offsetWidth});
      this.setState({r: this.refs.piechart.offsetWidth / 5}); 

      window.onresize = () => {
        this.setState({w: this.refs.piechart.offsetWidth});
        this.setState({h: this.refs.piechart.offsetWidth});
        this.setState({r: this.refs.piechart.offsetWidth / 5}); 
      };

      if (this.props.idp) {
        const post = this.state.posts.filter((item) => (item.id == this.props.idp));
        this.setState({records: post});
      } else {
        this.setState({records: this.state.posts});
      }
    });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  like(e) {
    const data = this.state.data;
    data[e.currentTarget.id - 1].value += 1;
    this.setState({data});
    this.mass = data.map((item) => (item.value));
  }

  search(e) {
    const records = this.state.posts.filter((item) => (item.title.toLowerCase().indexOf(e.currentTarget.value.toString().toLowerCase()) != -1));
    this.setState({records});
    if (e.currentTarget.value.toString() == '') {
      this.setState({records: this.state.posts});
    }
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column widescreen={11}>
          <Segment>
            <BlogList  addLike = {this.like} records = {this.state.records} ids={this.mass}/>
          </Segment>
        </Grid.Column>
        <Grid.Column widescreen={5}>
          <Segment>
            <Search goSearch={this.search} />
          </Segment>
          <Segment>
            <div ref='piechart'>
              <PieChart data={this.state.data} w={this.state.w} h={this.state.h} r={this.state.r}/>
            </div>
          </Segment>          
        </Grid.Column>
      </Grid.Row>
    );   
  }

  static get propTypes() {
    return {
      records: PropTypes.array,
      map: PropTypes.func,
      idp: PropTypes.number
    };
  }
}

export default BlogPage;