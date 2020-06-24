import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';

const StockMinWeekValue = ({ calc }) => {
  const minWeekValue = calc ? `min week value : ${calc.minWeekValue}ベル` : undefined;
  return <p className="">{minWeekValue}</p>;
};

const mapStateToProps = (state: AllState) => ({
  calc: state.stock.calc,
});

export default connect(mapStateToProps, null)(StockMinWeekValue);
