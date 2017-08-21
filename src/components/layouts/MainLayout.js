import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Container, Grid, Segment, Header, Menu} from 'semantic-ui-react';


const MainLayout = ({children}) => (
  <Container>
    <Grid columns='equal'>
      <Logo />
      {children}
      <Footer />
    </Grid>
  </Container>
);

const Logo = () => (
  <Grid.Row>
    <Grid.Column>
      <Segment>
        <Header>
          <Link to='/'>REACT.JS COURSE - BLOG</Link>
          <Link to='/contacts'> CONTACTS</Link>
          <Link to='/post/add'> NEW PAGE</Link>
        </Header>
      </Segment>    
    </Grid.Column>  
  </Grid.Row>		
);

const Footer = () => (
  <Grid.Row>
    <Grid.Column>
      <Segment>
          Powered by ReactJS course.
      </Segment>    
    </Grid.Column>
  </Grid.Row>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;