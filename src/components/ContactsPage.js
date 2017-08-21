import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Contacts from 'components/widgets/contacts/Contacts';
import Helmet from 'react-helmet';


class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <Helmet title="REACT BLOG" />
        <Grid.Column>
          <Segment>
            <Contacts />
          </Segment>    
        </Grid.Column>
      </Grid.Row>
    );   
  }
}

export default ContactsPage;