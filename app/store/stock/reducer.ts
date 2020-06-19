import { stockActionTypes } from './action';

const stockInitialState = {
  value: [],
  calc: {},
};

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
