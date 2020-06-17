import { connect } from 'react-redux';
// style
import styles from '@/pagestyle/profile.module.scss';

const Page = ({ title }) => (
  <main className={`${styles['p-profile']} l-main`}>
    <p>{title}</p>
  </main>
);

export default connect(state => state)(Page);
