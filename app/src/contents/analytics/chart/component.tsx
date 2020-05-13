import React, { useRef, useEffect } from 'react';
import { AnalyticsState } from '../reducers';
const Chart = require('chart.js');

interface OwnProps {}
// type ChartProps = OwnProps;
type ChartProps = OwnProps & AnalyticsState;

export const ObjectChart: React.SFC<ChartProps> = (props: ChartProps) => {
  console.log(props.price);

  const ctx = useRef(null);

  useEffect(() => {
    var myChart = new Chart(ctx.current, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);
  return (
    <div className="o-chart">
      <canvas ref={ctx} width="320" height="240"></canvas>
    </div>
  );
};
