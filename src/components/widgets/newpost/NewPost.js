import React from 'react';
import PropTypes from 'prop-types';
import { set } from 'lodash/object';
import { Header, Form, Input, TextArea, Button, Icon } from 'semantic-ui-react';
import {createPost} from 'actions/Posts';
import {connect} from 'react-redux';


class NewPost extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          name: '',
          title: '',
          post: '',
        },
        errors: {
          name: false,
          title: false,
          post: false,          
        }
      }
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(e){
    const {name, title, post} = this.state.form.values;
    this.props.createPost(name, title, post, this.props.count)
  }

  handleChange(e){
    this.isError(e, e.target.name);
    let form = this.state.form;
    form.values[e.target.name] = e.target.value;
    this.setState({ form })
  }

  isError(event, nameField){
    switch(nameField){
      case 'name':
        this.clearError('name');
        if(event.target.value.length < 5){
          let form = this.state.form;
          form.errors[nameField] = true;
          this.setState({ form })
        } break;
    }
  }

  clearError(name){
    let form = this.state.form;
    form.errors[name] = false;
    this.setState({ form })    
  }


  render() {
    const {name, title, post} = this.state.form.values;
    return (
      <div>
        <Header size='small'>Create a new post:</Header>
        <Form onSubmit={this.submitHandler} >
        <Form.Field error = {!!this.state.form.errors.fullName} >
          <Input 
            placeholder='Your name...' 
            name='name'
            value={name} 
            onChange={this.handleChange} 
          />
        </Form.Field>
        <Form.Field>
          <Input 
            placeholder='Title...' 
            name='title' 
            value={title} 
            onChange={this.handleChange} 
          />
        </Form.Field>
        <Form.Field>
          <TextArea 
            rows = {10}
            placeholder='Text...' 
            name='post' 
            value={post} 
            onChange={this.handleChange} 
          />
        </Form.Field>
        <Form.Field>
          <Button type='submit'>Create post</Button>
        </Form.Field>           
        </Form>
      </div>
    );
  }
}

// Posts.propTypes = {
//   posts: PropTypes.array,
//   fetchPosts: PropTypes.func,
//   router: PropTypes.string
// };

const mapStateToProps = (state) => ({
  count: state.posts.posts.length+1
})

const mapDispatchToProps = (dispatch) => ({
  createPost: (name, title, text, id) => dispatch(createPost(name, title, text, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);

//export default NewPost;