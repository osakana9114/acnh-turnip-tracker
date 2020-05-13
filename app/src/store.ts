import { createStore, combineReducers } from 'redux';
import { layoutReducer, LayoutState } from './layout/reducers';
import { dateReducer, DateState } from './components/date/reducers';
import { profileReducer, ProfileState } from './contents/profile/reducers';
export type AppState = {
  layout: LayoutState;
  date: DateState;
  profile: ProfileState;
};

const store = createStore(
  combineReducers<AppState>({
    layout: layoutReducer,
    date: dateReducer,
    profile: profileReducer,
  })
);

export default store;
