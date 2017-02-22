// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Window1Page from '../containers/Window1Page';
import Window2Page from '../containers/Window2Page';

export default class Home extends Component {
  render() {
    return (
      <div >
        <div className="home-page">
          <div className="styles.container">
              <div className="row"> Hit &lt;HELP&gt; for more info,  &lt;MENU&gt; for list of Similar functions, &lt;HISTORY&gt; for last actions    </div>
            <div className="row">
              <div className="navBar">
                  <button className="button-primary green">HELP</button>
                    <button className="button-primary green">MENU</button>
                <button className="button-primary green">History</button>
                <button className="button-primary margin">Peop</button>
                <button className="button-primary ">Anti</button>
                <button className="button-primary margin" >Mthd</button>
                <button className="button-primary" >Tisu</button>
                <button className="button-primary margin">Gene</button>
              </div>
            </div>
            <div className="row">
              <div className="six columns"> <Window1Page /> </div>
              <div className="six columns"> {(typeof this.props.children !== "undefined") && this.props.children} </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
