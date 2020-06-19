import Link from 'next/link';
import Router from 'next/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '@/store/stock/action';
import { AllState } from '@/store/index.ts';
// style
import styles from '@/pagestyle/analytics.module.scss';

const Page = ({ title, value, updateStock }) => {
  const weekLabel = ['日', '月', '火', '水', '木', '金', '土'];

  const list = [];

  value.map((val, index) => {
    list.push(
      <span key={`stockPrice${index}`}>
        {index === 0 ? (
          <span>{weekLabel[0]}</span>
        ) : index % 2 ? (
          <span>{weekLabel[Math.round(index / 2)]}</span>
        ) : undefined}
        <input
          name={`value`}
          type="number"
          step="1"
          min="1"
          max="660"
          defaultValue={value[index]}
        />
        {!(index % 2) ? <br /> : undefined}
      </span>
    );
  });

  // submit
  async function submitForm(e) {
    e.preventDefault();
    const payload: number[] = [];
    [].slice.call(e.target.value).map(input => payload.push(input.value ? +input.value : null));
    const res = await updateStock(payload);
    const complete = await Router.push('/');
    localStorage.setItem('acnh-turnip-tracker', JSON.stringify(payload));
  }

  return (
    <main className={`${styles['p-analytics']} l-main`}>
      <p>{title}（←componentへ値をわたすサンプル）</p>
      <form onSubmit={submitForm}>
        {list}
        <div>
          <button>実行</button>
        </div>
        <div>
          <Link href="/">
            <button type="button">もどる</button>
          </Link>
        </div>
      </form>
    </main>
  );
};

const mapStateToProps = (state: AllState) => ({
  value: state.stock.value,
});

const mapDispatchToProps = dispatch => {
  return {
    updateStock: bindActionCreators(updateStock, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
