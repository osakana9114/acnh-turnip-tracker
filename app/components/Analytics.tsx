import Link from 'next/link';
import { connect } from 'react-redux';
import StockChart from '@/components/object/StockChart';
import StockForm from '@/components/object/StockForm';
import TurnipCalculator from '@/components/api/TurnipCalculator';
// 日付
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
// style
import styles from '@/pagestyle/analytics.module.scss';

const Page = ({ title, linkTo, tick }) => (
  <main className={`${styles['p-analytics']} l-main`}>
    <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
    <TurnipCalculator />
    <StockChart />
    <StockForm />
  </main>
);

export default connect(state => state)(Page);
