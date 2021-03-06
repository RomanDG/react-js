import React from 'react';
import rd3 from 'react-d3';
import PropTypes from 'prop-types';
const PChart = rd3.PieChart;


class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: null,
    };
  }

  componentWillReceiveProps() {
    this.setState({size: this.refs.piechart.offsetWidth});
  }

  componentDidMount() {
    window.onresize = () => this.setState({size: this.refs.piechart.offsetWidth});
  }

  render() {
    const {data} = this.props;
    return (
      <div ref='piechart'>
        <PChart 
          data={data}
          width={this.state.size}
          height={this.state.size}
          radius={(this.state.size / 5)}
          innerRadius={0}
          sectorBorderColor="white"
          title="Статистика количества лайков:"
        />
      </div>
    );
  }
}

export default PieChart;


PieChart.propTypes = {
  data: PropTypes.array,
};