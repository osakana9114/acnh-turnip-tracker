import React, { FC } from 'react';
import { AppProps } from 'next/app';
import GlobalHeader from '@/components/layout/header';
import GlobalNavi from '@/components/layout/navigation';
import styles from '@/layoutstyle/page.module.scss';
import '../style/style.scss';

import { wrapper } from '../store/';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={`${styles['l-page']}`}>
      <GlobalHeader />
      <Component {...pageProps} />
      <GlobalNavi />
    </div>
  );
};

export default wrapper.withRedux(WrappedApp);
