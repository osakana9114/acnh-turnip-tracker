import React, { FC } from 'react';
import { AppProps } from 'next/app';
import GlobalHeader from '@/components/layout/header';
import GlobalNavi from '@/components/layout/navigation';
import styles from '@/layoutstyle/page.module.scss';
import '../style/style.scss';

import { wrapper } from '@/store/index.ts';

import UpdateStrage from '@/components/api/UpdateStrage';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className={`${styles['l-page']}`}>
      <UpdateStrage />
      <GlobalHeader />
      <Component {...pageProps} />
      <GlobalNavi />
    </div>
  );
};

export default wrapper.withRedux(WrappedApp);
