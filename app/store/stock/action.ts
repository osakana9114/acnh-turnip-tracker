export const stockActionTypes = {
  UPDATE: 'STOCK_UPDATE',
  CALCULATE: 'STOCK_CALCULATE',
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
