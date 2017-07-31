import {connect} from 'react-redux';
import PieChart from 'components/widgets/blog/PieChart';

const mapStateToProps = (state) => ({
  data: state.posts.posts.map((item) => (
    Object.assign({}, {label: item.title, value: item.metaData.currentLike})
  ))
});

export default connect(mapStateToProps)(PieChart);