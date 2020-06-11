import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCount, resetCount } from '@/store/count/action';

const AddCount = ({ count, addCount, resetCount }) => {
  return (
    <div>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={addCount}>Add To Count</button>
      <button onClick={resetCount}>Reset To Count</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    resetCount: bindActionCreators(resetCount, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
