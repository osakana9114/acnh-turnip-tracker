import styles from '../style/module/analytics.module.scss';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

function Research() {
  return (
    <main className={`${styles['p-analytics']} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <p>チャートと予想</p>
    </main>
  );
}

export default Research;
