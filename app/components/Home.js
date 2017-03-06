// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import Window1Page from '../containers/Window1Page';
import Window2Page from '../containers/Window2Page';
import Modal from 'react-modal';

class Images extends Component {
  render() {
  }
}
class History extends Component {
  render() {
  }
}
export default class Home extends Component {
  render() {
    // const { modalIsOpen, closeModal } =
    const { modal, showModal, toggleModal } = this.props;
    const closeModal = function () { alert('close'); };
    const customStyles = { backgroundColor: '#222' };
    const currentModal = 'history';
    let currentModalJSX = (<div />);
    if (currentModal === 'history') {
      currentModalJSX = (<div>history</div>);
    } else if (currentModal === 'images') {
      currentModalJSX = (<div>images</div>);
    }
    return (
      <div >
        <div className="home-page">
          <div className="styles.container">
            <div className="row"> Hit &lt;HELP&gt; for more info,  &lt;MENU&gt; for list of Similar functions, &lt;HIST&gt; for last actions              </div>
            <div className="row">
              <div className="navBar">
                <button className="button-primary green">HELP</button>
                <button className="button-primary green">MENU</button>
                <button className="button-primary green">HIST</button>
                <button className="button-primary margin">Peop</button>
                <button className="button-primary ">Anti</button>
                <button className="button-primary margin" >Mthd</button>
                <button className="button-primary" >Tisu</button>
                <button className="button-primary margin">Gene</button>
              </div>
            </div>
            <div className="row">
              <div className="six columns"> <Window1Page /> </div>
              <div className="six columns"> {(typeof this.props.children !== 'undefined') && this.props.children} </div>
            </div>
            <Modal
              isOpen={modal.isOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Razor"
            >
              <h2 ref="subtitle">Hello</h2>
              { currentModalJSX }
              <button onClick={toggleModal}>close</button>
              <div>I am a modal</div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
