import { connect } from 'react-redux';
import { AppState } from '../../store';
import { GrobalHeader } from './component';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.profile);
}

export default connect(mapStateToProps)(GrobalHeader);
