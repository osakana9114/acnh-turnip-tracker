import { profileActionTypes } from './action';

const profileInitialState = {
  username: '?',
  place: '?',
};

export default function reducer(state = profileInitialState, action) {
  switch (action.type) {
    case profileActionTypes.UPDATE:
      return Object.assign({}, state, {
        username: action.payload.username,
        place: action.payload.place,
      });
    default:
      return state;
  }
}
