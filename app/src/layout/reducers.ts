import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { layoutActions } from './actions';

// 型指定
export interface LayoutState {
  contents: string[];
  currentContent: 'profile' | 'analytics' | 'research';
}

// 初期値
const initState: LayoutState = {
  contents: ['profile', 'analytics', 'research'],
  currentContent: 'profile',
};

export const layoutReducer = reducerWithInitialState(initState).case(
  layoutActions.updateCurrent,
  (state, currentContent) => Object.assign({}, state, { currentContent })
);
