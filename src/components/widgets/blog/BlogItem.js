import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostPath from 'components/helpers/PostPath';


const BlogItem = ({img, text, metaData, id, title}) => (

  <div>
    <div>
      <Link to={{pathname: PostPath(`${id}`)}} ><h3>{title}</h3></Link>
    </div>
    <Image {...img} />
    <TextBox text={text} />
    <div>
      <Icon name='outline calendar' />: {metaData.createDate} / <Icon name='undo' />: {metaData.updateDate} / <Icon name='user' />: {metaData.author} <LikeBtn addLike id={id} />   
    </div>
  </div>
);

BlogItem.propTypes = {
  img: PropTypes.object,
  text: PropTypes.string,
  metaData: PropTypes.object,
  addLike: PropTypes.func,
  id: PropTypes.number,
  title: PropTypes.string,
  ids: PropTypes.array
};

export default BlogItem;