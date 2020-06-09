import styles from '@/module/trading.module.scss';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

function Page() {
  return (
    <main className={`${styles.trading} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <p>収支と、売買ログ</p>
    </main>
  );
}

export default Page;
