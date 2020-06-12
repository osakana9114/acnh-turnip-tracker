import React from 'react';
import styles from '@/pagestyle/profile.module.scss';
const Page: NextPage<Props> = props => {
  return (
    <main className={`${styles['p-profile']} l-main`}>
      <p>自分の情報</p>
    </main>
  );
};

export default Page;
