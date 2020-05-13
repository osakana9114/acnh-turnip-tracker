import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { GrobalNavigation } from './component';
import { layoutActions } from '../actions';

export interface LayoutActions {
  updateCurrent: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    updateCurrent: (v: string) => dispatch(layoutActions.updateCurrent(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.layout);
}

export default connect(mapStateToProps, mapDispatchToProps)(GrobalNavigation);
