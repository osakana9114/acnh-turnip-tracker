export const stockActionTypes = {
  UPDATE: 'UPDATE',
  CALCULATE: 'CALCULATE',
};

export const updateStock = payload => dispatch => {
  return dispatch({
    type: stockActionTypes.UPDATE,
    payload: payload,
  });
};

export const calculateStock = payload => dispatch => {
  return dispatch({
    type: stockActionTypes.CALCULATE,
    payload: payload,
  });
};
