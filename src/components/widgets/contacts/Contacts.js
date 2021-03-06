import React from 'react';
import { Header, Form, Input, TextArea, Button } from 'semantic-ui-react';


class Contacts extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: '',
        },
        errors: {
          fullName: false,
          email: false,
          message: false,          
        }
      }
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  handleChange(e) {
    this.isError(e, e.target.name);
    const form = this.state.form;
    form.values[e.target.name] = e.target.value;
    this.setState({ form });
  }

  isError(event, nameField) {
    switch (nameField) {
      case 'fullName':
        this.clearError('fullName');
        if (event.target.value.length < 5) {
          const form = this.state.form;
          form.errors[nameField] = true;
          this.setState({ form });
        } break;
    }
  }

  clearError(name) {
    const form = this.state.form;
    form.errors[name] = false;
    this.setState({ form });    
  }


  render() {
    const {fullName, email, message} = this.state.form.values;
    return (
      <div>
        <Header size='small'>Contacts:</Header>
        <Form onSubmit={this.submitHandler} >
          <Form.Field error = {!!this.state.form.errors.fullName} >
            <Input 
              placeholder='Enter your full name' 
              name='fullName'
              value={fullName} 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <Input 
              placeholder='Enter your email' 
              name='email' 
              value={email} 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <TextArea 
              rows = {10}
              placeholder='Enter your message ...' 
              name='message' 
              value={message} 
              onChange={this.handleChange} 
            />
          </Form.Field>
          <Form.Field>
            <Button type='submit'>Submit message</Button>
          </Form.Field>           
        </Form>
      </div>
    );
  }
}

export default Contacts;