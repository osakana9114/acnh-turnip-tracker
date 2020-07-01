import React from 'react';
import { NextPage } from 'next';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// store
// import { wrapper } from '@/store/';

// components
import Profile from '@/components/page/Profile/';

// interface
interface Props {
  updateStock: any;
}
const Page: NextPage = () => {
  return <Profile title="プロフィール" />;
};

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(serverRenderClock(true));
// });

export default connect(null, null)(Page);
