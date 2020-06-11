import { stockActionTypes } from './action';

const stockInitialState = {
  price: [null, null, null, null, null, null, null, null, null, null, null, null, null],
};

export default function reducer(state = stockInitialState, action) {
  switch (action.type) {
    case stockActionTypes.ADD:
      return Object.assign({}, state, {
        price: Array(13),
      });
    case stockActionTypes.UPDATE:
      const priceValues: number[] = [];
      [].slice.call(action.form).map(input => priceValues.push(input.value ? +input.value : null));
      return Object.assign({}, state, {
        price: priceValues,
      });
    default:
      return state;
  }
}
