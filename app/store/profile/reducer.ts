import { profileActionTypes } from './action';

interface ProfileType {
  username?: string;
  place?: string;
}

const profileInitialState: ProfileType = {};

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
