import styles from '../style/module/research.module.scss';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';

function Research() {
  return (
    <div className={`${styles['p-research']} l-main`}>
      <p>{format(new Date(), 'MMMdo(EEEEE) a', { locale: ja })}</p>
      <p>ここでみんなのカブ価がみられる</p>
    </div>
  );
}

export default Research;
