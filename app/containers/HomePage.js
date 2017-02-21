// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomePageActions from '../actions/homepage';

function mapStateToProps(state) {
  console.log('state',state);
  return {
    modal: state.modal
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomePageActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
