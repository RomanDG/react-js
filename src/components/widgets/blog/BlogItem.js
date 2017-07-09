
import React from 'react';

import Image from 'components/widgets/blog/elements/Image';
import TextBox from 'components/widgets/blog/elements/TextBox';
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';


class BlogItem extends React.Component {
  render(){
    const {img, text, metaData, addLike, id, title, ids} = this.props;
    return (
      <div className="blog-item">
        <div>
          <h4>{title}</h4>
        </div>
        <Image img={img} />
        <TextBox text={text} />
        <div>
          Дата создания: {metaData.createDate} / Дата обновления: {metaData.updateDate} / Автор: {metaData.author} <LikeBtn addLike = {addLike} id={id} ids={ids} />   
        </div>
      </div>
    );
  }
};

export default BlogItem;