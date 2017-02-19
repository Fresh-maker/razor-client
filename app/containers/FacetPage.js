import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Facets from '../components/Facets';
import * as Window1Actions from '../actions/window1';

function mapStateToProps(state) {
  return {
    facets: state.window1.facets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Window1Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Facets);
