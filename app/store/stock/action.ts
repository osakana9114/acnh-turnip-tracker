export const stockActionTypes = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
};

export const addStock = () => dispatch => {
  return dispatch({ type: stockActionTypes.ADD });
};

export const updateStock = e => dispatch => {
  e.preventDefault();
  return dispatch({
    type: stockActionTypes.UPDATE,
    form: e.target.price,
  });
};
