import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Window2 from '../components/Window2';
import * as Window1Actions from '../actions/window1';

function mapStateToProps(state) {
  return {
    currentSearch: state.window1.currentSearch
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Window1Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Window2);
