import { connect } from 'react-redux';
import { AppState } from '../store';
import { Layout } from './component';

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.layout);
}

export default connect(mapStateToProps)(Layout);
