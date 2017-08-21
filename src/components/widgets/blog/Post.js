import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import EditPost from 'components/widgets/blog/elements/EditPostForm';
import LikeBtnContainer from 'containers/LikeBtnContainer';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostPath from 'components/helpers/PostPath';
import {connect} from 'react-redux';
import {incrementLikes} from 'actions/Posts';
import Helmet from 'react-helmet';
import { Button } from 'semantic-ui-react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editPostTogle: false
    };

    this.addLike = this.addLike.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  addLike(e) {
    const id = e.currentTarget.id;
    this.props.incrementLikes(id);   
  }

  toggleEdit(e) {
    this.setState({editPostTogle: !this.state.editPostTogle})
  }

  render() {
    const {img, text, metaData, id, title, location} = this.props;
    return (
      <div>
        <Helmet title={title} />
        <div>
          <Link to={{pathname: PostPath(`${id}`)}} ><h3>{title}</h3></Link>
        </div>
        <Image {...img} />
        <TextBox text={text} />
        <div>
          <Icon name='outline calendar' />: {metaData.createDate} / <Icon name='undo' />: {metaData.updateDate} / <Icon name='user' />: {metaData.author} <LikeBtnContainer addLike={this.addLike} id={id} />   
        </div>
        <Button onClick={this.toggleEdit}>edit post</Button>
        <div>{this.state.editPostTogle && location == `/post/${id}` && <EditPost />}</div>
      </div>      
    );
  }
}

Post.propTypes = {
  img: PropTypes.object,
  text: PropTypes.string,
  metaData: PropTypes.object,
  addLike: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  incrementLikes: PropTypes.func,
};

const maStateToProps = state => ({
  location: state.router.location.pathname
})

const mapDispatchToProps = dispatch => ({
  incrementLikes: (id) => dispatch(incrementLikes(id))
});

export default connect(maStateToProps, mapDispatchToProps)(Post);