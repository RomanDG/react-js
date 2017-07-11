import React from 'react';
import rd3 from 'react-d3';
import PropTypes from 'prop-types';
const PChart = rd3.PieChart;

import { Segment } from 'semantic-ui-react';

const PieChart = ({data}) => (
  <Segment>
    <PChart 
      data={data}
      width={600}
      height={400}
      radius={100}
      innerRadius={20}
      sectorBorderColor="white"
      title="Статистика количества лайков:"
    />
  </Segment>
);

PieChart.propTypes = {
  data: PropTypes.array,
};

export default PieChart;