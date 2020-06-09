import React, { useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
const Chart = require('chart.js');
import styles from '@/module/analytics.module.scss';

function Research() {
  const ctx = useRef(null);
  useEffect(() => {
    var myChart = new Chart(ctx.current, {
      type: 'line',
      data: {
        labels: ['日', '月', '', '火', '', '水', '', '木', '', '金', '', '土', ''],
        datasets: [
          {
            label: '今週のカブ価',
            data: [97, 84, 80, 76, 72, 68, 64, 59, 56, 52, 42, 42, 38],
            borderColor: '#19c8b9',
            borderWidth: 3,
            pointBorderColor: '#19c8b9',
            pointRadius: 4,
            pointBackgroundColor: 'white',
            backgroundColor: 'transparent',
            lineTension: 0, // 0で直線、数値が上がると膨らんで曲線化
            spanGaps: true, // 抜けがあるとき線でつなぐ
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
    <main className={`${styles['p-analytics']} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <div className={`${styles['o-chart']}`}>
        <canvas ref={ctx}></canvas>
      </div>
    </main>
  );
}

export default Research;
