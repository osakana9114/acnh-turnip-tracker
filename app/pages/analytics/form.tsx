import { NextPage } from 'next';
import { connect } from 'react-redux';

// component
import StockForm from '@/components/object/StockForm';
// style
import styles from '@/pagestyle/analytics.module.scss';

const Page: NextPage<Props> = props => {
  return (
    <main className={`${styles['p-analytics']} l-main`}>
      <StockForm />
    </main>
  );
};

export default connect(null, null)(Page);
