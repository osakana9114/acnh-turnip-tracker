import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { profileActions } from './actions';

// 型指定
export interface ProfileState {
  place: string;
  name: string;
  comment: string;
}

// 初期値
const initState: ProfileState = {
  place: '???',
  name: 'なまえ たろう',
  comment: 'ひとこと',
};

export const profileReducer = reducerWithInitialState(initState)
  .case(profileActions.updatePlace, (state, place) => Object.assign({}, state, { place }))
  .case(profileActions.updateName, (state, name) => Object.assign({}, state, { name }))
  .case(profileActions.updateComment, (state, comment) => Object.assign({}, state, { comment }));
