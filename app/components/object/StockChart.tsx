import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';
const Chart = require('chart.js');

const StockChart = ({ price, calc }) => {
  const ctx = useRef(null);
  const minPattern: number[] = calc ? calc.minPattern : [];
  const maxPattern: number[] = calc ? calc.maxPattern : [];

  useEffect(() => {
    // チャート描画
    var myChart = new Chart(ctx.current, {
      type: 'line',
      data: {
        labels: ['日', '月', '', '火', '', '水', '', '木', '', '金', '', '土', ''],
        datasets: [
          {
            label: '今週のカブ価',
            data: price,
            borderColor: '#19c8b9',
            borderWidth: 3,
            pointBorderColor: '#19c8b9',
            pointRadius: 4,
            pointBackgroundColor: 'white',
            backgroundColor: 'transparent',
            lineTension: 0, // 0で直線、数値が上がると膨らんで曲線化
            spanGaps: true, // 抜けがあるとき線でつなぐ
          },
          {
            label: '',
            data: minPattern,
            borderColor: 'rgba(24,199,184, 0.2)',
            borderWidth: 0,
            pointRadius: 0,
            backgroundColor: 'transparent',
            lineTension: 0, // 0で直線、数値が上がると膨らんで曲線化
            fill: '-1',
          },
          {
            label: '予想',
            data: maxPattern,
            borderColor: 'rgba(24,199,184, 0.2)',
            borderWidth: 0,
            pointRadius: 0,
            backgroundColor: 'rgba(24,199,184, 0.2)',
            lineTension: 0, // 0で直線、数値が上がると膨らんで曲線化
            fill: '-1',
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
  }, [price, calc]);
  return (
    <div className="o-chart">
      <canvas ref={ctx}></canvas>
    </div>
  );
};

const mapStateToProps = (state: AllState) => ({
  price: state.stock.price,
  calc: state.stock.calc,
});

export default connect(mapStateToProps, null)(StockChart);
