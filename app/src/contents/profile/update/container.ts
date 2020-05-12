import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { profileActions } from '../actions';
import { UpdateTemplate } from './component';

export interface ProfileUpdate {
  updatePlace: (v: string) => Action<string>;
  updateName: (v: string) => Action<string>;
  updateComment: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    updatePlace: (v: string) => dispatch(profileActions.updatePlace(v)),
    updateName: (v: string) => dispatch(profileActions.updateName(v)),
    updateComment: (v: string) => dispatch(profileActions.updateComment(v)),
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.profile);
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTemplate);
