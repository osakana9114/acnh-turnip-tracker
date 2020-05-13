import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { ObjectChart } from './component';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.analytics);
}

export default connect(mapStateToProps)(ObjectChart);
