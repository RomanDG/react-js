import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import LikeBtnContainer from 'containers/LikeBtnContainer';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostPath from 'components/helpers/PostPath';
import {connect} from 'react-redux';
import {incrementLikes} from 'actions/Posts';
import Helmet from 'react-helmet';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.addLike = this.addLike.bind(this);
  }

  addLike(e) {
    const id = e.currentTarget.id;
    this.props.incrementLikes(id);   
  }

  render() {
    const {img, text, metaData, id, title} = this.props;
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

const mapDispatchToProps = dispatch => ({
  incrementLikes: (id) => dispatch(incrementLikes(id))
});

export default connect(null, mapDispatchToProps)(Post);