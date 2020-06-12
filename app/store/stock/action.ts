export const stockActionTypes = {
  UPDATE: 'UPDATE',
  CALCULATE: 'CALCULATE',
};

export const updateStock = e => dispatch => {
  e.preventDefault();
  return dispatch({
    type: stockActionTypes.UPDATE,
    form: e.target.price,
  });
};

export const calculateStock = result => dispatch => {
  return dispatch({
    type: stockActionTypes.CALCULATE,
    data: result,
  });
};
