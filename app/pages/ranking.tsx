import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// store
import { wrapper } from '../store/';

// components
import Ranking from '@/components/page/Ranking';

const Page: NextPage<Props> = props => {
  return <Ranking title="ここでみんなのカブ価がみられる" />;
};

export default connect(null, null)(Page);
