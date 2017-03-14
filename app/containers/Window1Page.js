import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Window1 from '../components/Window1';
import * as Window1Actions from '../actions/window1';

function mapStateToProps(state) {
  return {
    searchpairs: state.searchpairs,
    currentSearch: state.window1.currentSearch,
    facets: state.facets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Window1Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Window1);
