import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ObjectToday } from './component';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.date);
}

export default connect(mapStateToProps)(ObjectToday);
