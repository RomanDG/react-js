import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {updatePost} from 'actions/Posts';

const EditPost = ({handleSubmit, updatePost}) => (
  <Form onSubmit={handleSubmit((id, text) => updatePost(id, text))}>
    <Field name="text" component={renderField} type="textarea" />
    <Form.Field>
      <Button type='submit'>update post</Button>
    </Form.Field> 
  </Form>
);

const renderField = ({input, type, meta: {touched, error}}) => (
  <div className = "ui field">
    <textarea {...input} className="ui input" type={type} />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ))}
  </div>    
);

// тут я не понял, как можно из form -> values прокинуть в EditBox, как то как двойная работа выглядит.
export default connect(
  (state) => ({
    initialValues: {
      text: state.posts.posts[+state.router.location.pathname.replace(/\D+/g, '') - 1].text,
      id: +state.router.location.pathname.replace(/\D+/g, '')
    },
    text: state.posts.posts[+state.router.location.pathname.replace(/\D+/g, '') - 1].text,
    id: +state.router.location.pathname.replace(/\D+/g, '')
  }),
  (dispatch) => ({
    updatePost: (id, data) => dispatch(updatePost(id, data)),
  })
)(reduxForm({
  form: 'editPost'
})(EditPost));