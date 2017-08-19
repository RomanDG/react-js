import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import PostsContainer from 'containers/PostsContainer';
import Search from 'components/widgets/blog/Search';
import PieChartContainer from 'containers/PieChartContainer';
import Helmet from 'react-helmet';


class BlogPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <Helmet title="REACT BLOG" />
        <Grid.Column widescreen={11}>
          <Segment>
            <PostsContainer /> 
          </Segment>
        </Grid.Column>
        <Grid.Column widescreen={5}>
          <Segment>
            <Search />
          </Segment>
          <Segment>
            <PieChartContainer />
          </Segment>          
        </Grid.Column>
      </Grid.Row>
    );   
  }
}

export default BlogPage;