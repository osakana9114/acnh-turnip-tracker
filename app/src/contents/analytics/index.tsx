import React from 'react';
import Today from '../../components/date/container';
import Chart from './chart/container';

function Analytics() {
  return (
    <div className="l-page" id="content-analytics">
      <Today />
      <Chart />
    </div>
  );
}

export default Analytics;
