import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// store
// import { wrapper } from '@/store/';

// components
import Ranking from '@/components/page/Ranking/';

const Page: NextPage = () => {
  return <Ranking title="ここでみんなのカブ価がみられる" />;
};

export default connect(null, null)(Page);
