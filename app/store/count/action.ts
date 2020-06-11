export const countActionTypes = {
  ADD: 'ADD',
  RESET: 'RESET',
};

export const addCount = () => dispatch => {
  return dispatch({ type: countActionTypes.ADD });
};

export const resetCount = () => dispatch => {
  return dispatch({ type: countActionTypes.RESET });
};
