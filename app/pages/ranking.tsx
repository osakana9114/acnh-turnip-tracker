import styles from '@/pagestyle/ranking.module.scss';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

function Page() {
  return (
    <main className={`${styles['p-ranking']} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <p>ここでみんなのカブ価がみられる</p>
    </main>
  );
}

export default Page;
