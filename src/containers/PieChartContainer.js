import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PieChart from 'components/widgets/blog/PieChart';

class PieChartContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PieChart data={this.props.data}/>
    );
  }
}

PieChartContainer.propTypes = {
  data: PropTypes.array
};

const mapStateToProps = (state) => ({
  data: state.posts.posts.map((item) => (
    Object.assign({}, {label: item.title, value: item.metaData.currentLike})
  ))
});

export default connect(mapStateToProps)(PieChartContainer);