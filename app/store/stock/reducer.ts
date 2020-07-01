import { stockActionTypes } from './action';
import { Interface } from 'readline';

interface StockType {
  value?: number[];
  calc?: {};
}

const stockInitialState: StockType = {};

export default function reducer(state = stockInitialState, action) {
  switch (action.type) {
    case stockActionTypes.UPDATE:
      return Object.assign({}, state, {
        value: action.payload,
      });
    case stockActionTypes.CALCULATE:
      return Object.assign({}, state, {
        calc: action.payload,
      });
    default:
      return state;
  }
}
