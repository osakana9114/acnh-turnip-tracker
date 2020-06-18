import { connect } from 'react-redux';
// style
import styles from '@/pagestyle/trading.module.scss';

const Page = ({ title }) => (
  <main className={`${styles['p-trading']} l-main`}>
    <p>{title}</p>
  </main>
);

export default connect(state => state)(Page);
