// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import skeleton from '../styles/skeleton.css';
import styles from './Home.css';
import Window1Page from '../containers/Window1Page';
import Window2Page from '../containers/Window2Page';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Window1Page />
          <Window2Page />
        </div>
      </div>
    );
  }
}
