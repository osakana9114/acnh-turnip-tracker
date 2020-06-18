import { connect } from 'react-redux';
// style
import styles from '@/pagestyle/ranking.module.scss';

const Page = ({ title }) => (
  <main className={`${styles['p-ranking']} l-main`}>
    <p>{title}</p>
  </main>
);

export default connect(state => state)(Page);
