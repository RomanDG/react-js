import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';


const BlogItem = ({img, text, metaData, addLike, id, title, ids}) => (
  <div>
    <div>
      <h4>{title}</h4>
    </div>
    <Image {...img} />
    <TextBox text={text} />
    <div>
          Дата создания: {metaData.createDate} / Дата обновления: {metaData.updateDate} / Автор: {metaData.author} <LikeBtn addLike = {addLike} id={id} ids={ids} />   
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