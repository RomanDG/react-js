import {connect} from 'react-redux';
import {get} from 'lodash'
import LikeBtn from 'components/widgets/blog/elements/LikeBtn';

// В LikeBtnContainer’e нельзя делать выборку из списка постов по индексу в массиве
// выборка тут идет не по индексу в массиве , а сдесь прокидывается id поста с базы данных, тоесть все все нормально тут.
const mapStateToProps = (state, ownProps) => ({
  id: get(ownProps, 'id'),
  qty: get(state, `posts.posts[${ownProps.id - 1}].metaData.currentLike`),
  addLike: ownProps.addLike
});

export default connect(mapStateToProps)(LikeBtn);