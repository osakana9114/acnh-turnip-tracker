export const stockActionTypes = {
  UPDATE: 'UPDATE',
  CALCULATE: 'CALCULATE',
};

export const updateStock = e => dispatch => {
  e.preventDefault();
  return dispatch({
    type: stockActionTypes.UPDATE,
    payload: e.target.price,
  });
};

export const calculateStock = result => dispatch => {
  return dispatch({
    type: stockActionTypes.CALCULATE,
    payload: result,
  });
};
