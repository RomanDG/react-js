import React from 'react';
import rd3 from 'react-d3';
import PropTypes from 'prop-types';
const PChart = rd3.PieChart;

const PieChart = ({data, size}) => (
  <PChart 
    data={data}
    width={size}
    height={size}
    radius={(size / 5)}
    innerRadius={0}
    sectorBorderColor="white"
    title="Статистика количества лайков:"
  />
);


PieChart.propTypes = {
  data: PropTypes.array,
  size: PropTypes.number
};

export default PieChart;