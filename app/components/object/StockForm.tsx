import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStock } from '@/store/stock/action';

const StockForm = ({ price, updateStock }) => {
  const weekLabel = ['日', '月', '火', '水', '木', '金', '土'];

  const list = [];

  price.map((val, index) => {
    list.push(
      <span key={`stockPrice${index}`}>
        {index === 0 ? (
          <spam>{weekLabel[0]}</spam>
        ) : index % 2 ? (
          <spam>{weekLabel[Math.round(index / 2)]}</spam>
        ) : undefined}
        <input name={`price`} type="number" step="1" defaultValue={price[index]} />
        {!(index % 2) ? <br /> : undefined}
      </span>
    );
  });

  return (
    <form onSubmit={updateStock}>
      <input name="hiddentest" type="hidden" value="test" />
      {list}
      <button>カブ価書き換えテスト</button>
    </form>
  );
};

const mapStateToProps = state => ({
  price: state.stock.price,
});

const mapDispatchToProps = dispatch => {
  return {
    updateStock: bindActionCreators(updateStock, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StockForm);
