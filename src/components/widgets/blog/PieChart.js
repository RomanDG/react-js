import React from 'react';
import rd3 from 'react-d3';
import PropTypes from 'prop-types';
const PChart = rd3.PieChart;

const PieChart = ({data, w, h, r}) => (
  <PChart 
    data={data}
    width={w}
    height={h}
    radius={r}
    innerRadius={0}
    sectorBorderColor="white"
    title="Статистика количества лайков:"
  />
);

PieChart.propTypes = {
  data: PropTypes.array,
  w: PropTypes.number,
  h: PropTypes.number,
  r: PropTypes.number
};

export default PieChart;