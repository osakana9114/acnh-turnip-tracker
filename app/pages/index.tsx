import React, { useEffect } from 'react';
import { NextPage } from 'next';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// store
import { wrapper } from '../store/';

// components
import Analytics from '../components/Analytics';

const Page: NextPage<Props> = props => {
  return <Analytics title="カブ価の推移など" linkTo="/ranking" />;
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(serverRenderClock(true));
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     startClock: bindActionCreators(startClock, dispatch),
//   };
// };

export default connect(null, null)(Page);
