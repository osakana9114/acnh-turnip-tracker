import styles from '../style/module/analytics.module.scss';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

function Research() {
  return (
    <div className={`${styles['p-analytics']} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <p>チャートや損益</p>
    </div>
  );
}

export default Research;
