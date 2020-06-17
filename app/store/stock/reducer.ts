import { stockActionTypes } from './action';

const stockInitialState = {
  price: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  calc: {},
};

export default function reducer(state = stockInitialState, action) {
  switch (action.type) {
    case stockActionTypes.UPDATE:
      return Object.assign({}, state, {
        price: action.payload,
      });
    case stockActionTypes.CALCULATE:
      return Object.assign({}, state, {
        calc: action.payload,
      });
    default:
      return state;
  }
}
