import { connect } from 'react-redux';
import { AllState } from '@/store/';

const StockMinWeekValue = ({ calc }) => {
  return (
    <p className="">
      今週は<span>{calc.minWeekValue}</span>ベルまでは値上がりするかも
    </p>
  );
};

const mapStateToProps = (state: AllState) => ({
  calc: state.stock.calc,
});

export default connect(mapStateToProps, null)(StockMinWeekValue);
