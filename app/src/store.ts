import { createStore, combineReducers } from 'redux';
import { profileReducer, ProfileState } from './contents/profile/reducers';
export type AppState = {
  profile: ProfileState;
};

const store = createStore(
  combineReducers<AppState>({
    profile: profileReducer,
  })
);

export default store;
