import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';
import {Icon} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const BlogItem = ({img, text, metaData, addLike, id, title, ids}) => (

  <div>
    <div>
      <Link to={{pathname: `/post/${id}`}} ><h3>{title}</h3></Link>
    </div>
    <Image {...img} />
    <TextBox text={text} />
    <div>
      <Icon name='outline calendar' />: {metaData.createDate} / <Icon name='undo' />: {metaData.updateDate} / <Icon name='user' />: {metaData.author} <LikeBtn addLike = {addLike} id={id} ids={ids} />   
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