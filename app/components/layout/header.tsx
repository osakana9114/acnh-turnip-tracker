import Link from 'next/link';
import styles from '@/layout/header.module.scss';

export default () => (
  <header className={`${styles['l-header']}`}>
    <div className={`${styles['l-title']}`}>ウリとまめつぶ</div>
  </header>
);
