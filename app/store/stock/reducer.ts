import { stockActionTypes } from './action';

const stockInitialState = {
  price: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  calc: {},
};

export default function reducer(state = stockInitialState, action) {
  switch (action.type) {
    case stockActionTypes.UPDATE:
      const priceValues: number[] = [];
      [].slice
        .call(action.payload)
        .map(input => priceValues.push(input.value ? +input.value : null));
      return Object.assign({}, state, {
        price: priceValues,
      });
    case stockActionTypes.CALCULATE:
      return Object.assign({}, state, {
        calc: action.payload,
      });
    default:
      return state;
  }
}
