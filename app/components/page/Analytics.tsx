import { connect } from 'react-redux';
import Link from 'next/link';
// 日付
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
// component
import StockChart from '@/components/object/StockChart';
import TurnipCalculator from '@/components/api/TurnipCalculator';
import StockMinWeekValue from '@/components/object/StockMinWeekValue';
// style
import styles from '@/pagestyle/analytics.module.scss';

const Page = ({ title }) => (
  <main className={`${styles['p-analytics']} l-main`}>
    <p>{title}（←componentへ値をわたすサンプル）</p>
    <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
    <TurnipCalculator />
    <StockChart />
    <StockMinWeekValue />
    <Link href="/analytics/form">
      <button type="button">カブ価を記録</button>
    </Link>
  </main>
);

export default connect(state => state, null)(Page);
