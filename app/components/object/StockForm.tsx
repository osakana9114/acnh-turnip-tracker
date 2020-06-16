import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '@/store/stock/action';
import { AllState } from '@/store/';
import Router from 'next/router';

const StockForm = ({ price, updateStock }) => {
  const weekLabel = ['日', '月', '火', '水', '木', '金', '土'];

  const list = [];

  price.map((val, index) => {
    list.push(
      <span key={`stockPrice${index}`}>
        {index === 0 ? (
          <span>{weekLabel[0]}</span>
        ) : index % 2 ? (
          <span>{weekLabel[Math.round(index / 2)]}</span>
        ) : undefined}
        <input
          name={`price`}
          type="number"
          step="1"
          min="1"
          max="660"
          defaultValue={price[index]}
        />
        {!(index % 2) ? <br /> : undefined}
      </span>
    );
  });

  // submit
  async function submitForm(e) {
    e.preventDefault();
    const res = await updateStock(e.target.price);
    const complete = await Router.push('/');
  }

  return (
    <form onSubmit={submitForm}>
      <input name="hiddentest" type="hidden" value="test" />
      {list}
      <button>実行</button>
    </form>
  );
};

const mapStateToProps = (state: AllState) => ({
  price: state.stock.price,
});

const mapDispatchToProps = dispatch => {
  return {
    updateStock: bindActionCreators(updateStock, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockForm);
