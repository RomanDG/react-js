import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import NewPost from 'components/widgets/newpost/NewPost';
import Helmet from 'react-helmet';


class NewPostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <Helmet title="REACT BLOG" />
        <Grid.Column>
          <Segment>
            <NewPost />
          </Segment>    
        </Grid.Column>
      </Grid.Row>
    );   
  }
}

export default NewPostPage;