// import React, { useEffect, useRef } from 'react';
// import { format } from 'date-fns';
// import { ja } from 'date-fns/locale';
// const Chart = require('chart.js');
// import styles from '@/pagestyle/analytics.module.scss';

// function Page() {
//   const ctx = useRef(null);
//   useEffect(() => {
//     var myChart = new Chart(ctx.current, {
//       type: 'line',
//       data: {
//         labels: ['日', '月', '', '火', '', '水', '', '木', '', '金', '', '土', ''],
//         datasets: [
//           {
//             label: '今週のカブ価',
//             data: [97, 84, 80, 76, 72, 68, 64, 59, 56, 52, 42, 42, 38],
//             borderColor: '#19c8b9',
//             borderWidth: 3,
//             pointBorderColor: '#19c8b9',
//             pointRadius: 4,
//             pointBackgroundColor: 'white',
//             backgroundColor: 'transparent',
//             lineTension: 0, // 0で直線、数値が上がると膨らんで曲線化
//             spanGaps: true, // 抜けがあるとき線でつなぐ
//           },
//         ],
//       },
//       options: {
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 beginAtZero: true,
//               },
//             },
//           ],
//         },
//       },
//     });
//   }, []);
//   return (
//     <main className={`${styles['p-analytics']} l-main`}>
//       <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
//       <div className={`${styles['o-chart']}`}>
//         <canvas ref={ctx}></canvas>
//       </div>
//     </main>
//   );
// }

// export default Page;
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Analytics from '../components/Analytics';
import { addCount } from '../store/count/action';
import { wrapper } from '../store/';
import { serverRenderClock, startClock } from '../store/tick/action';

const Page = props => {
  useEffect(() => {
    const timer = props.startClock();

    return () => {
      clearInterval(timer);
    };
  }, [props]);

  return <Analytics title="カブ価の推移など" linkTo="/ranking" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(serverRenderClock(true));
  store.dispatch(addCount());
});

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Page);
