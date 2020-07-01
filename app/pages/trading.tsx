import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// store
// import { wrapper } from '@/store/';

// components
import Trading from '@/components/page/Trading/';

const Page: NextPage = () => {
  return <Trading title="収支と、売買ログ" />;
};

export default connect(null, null)(Page);
