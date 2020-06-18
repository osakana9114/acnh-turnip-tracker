import { connect } from 'react-redux';
import { AllState } from '@/store/index.ts';

const StockMinWeekValue = ({ calc }) => {
  return (
    <p className="">
      min week value : <span>{calc.minWeekValue}</span>ベル
    </p>
  );
};

const mapStateToProps = (state: AllState) => ({
  calc: state.stock.calc,
});

export default connect(mapStateToProps, null)(StockMinWeekValue);
