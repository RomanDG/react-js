
import React from 'react';

import rd3 from 'react-d3';

const PChart = rd3.PieChart;

import { Segment } from 'semantic-ui-react'

class PieChart extends React.Component {
  constructor(props){
    super(props);  

    this.ttl = this.props.titles;
    this.ids = this.props.ids;
    this.chart;

    this.data = {};

    this.state = {
      data: []
    }

    for(let id in this.ttl){
      const value = this.state.data;
      value.push([this.ttl[id], this.ids[id]]);
      this.setState({data: value})
    }

  }

  componentWillReceiveProps(nextProps){

    for(let id in this.ttl){
      const value = this.state.data;
      value.shift();
      value.push([this.ttl[id], this.ids[id]]);
      this.setState({data: value})
    }

    this.chart.load({
      columns: this.state.data
    })
  }

  componentWillUnmount(){
    //this.chart.destroy();
  }

  componentDidMount(){
    // this.chart = c3.generate({
    //   bindto: ReactDOM.findDOMNode(this.refs.chart),
    //   data: {
    //     columns: this.state.data,
    //     type: 'pie'
    //   }   
    // })
  }

  render(){
    return (
      <Segment>
        <h4>Сдесь был PieChart, но я так ине понял как его использовать, интегрировав в ReactJS</h4>
      </Segment>
      // <div ref="chart" />
    )
  }
};

export default PieChart;