export const profileActionTypes = {
  UPDATE: 'PROFILE_UPDATE',
};

export const updateProfile = payload => dispatch => {
  return dispatch({
    type: profileActionTypes.UPDATE,
    payload: payload,
  });
};
