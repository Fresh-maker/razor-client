// @flow
import React, { Component } from 'react';


class SearchBar extends Component {
  addPill = (e)=> {
    const { updateSearch, currentSearch } = this.props;
    updateSearch(`${currentSearch} [${e.target.name}]`);
  }
  render() {
    const { currentSearch, updateSearch } = this.props;
    return (
      <div>
        <div className="row"> Hit &lt;HELP&gt; for more info,  &lt;MENU&gt; for list of Similar functions, &lt;HIST&gt; for last actions              </div>
        <div className="row">
          <div className="navBar">
            <button className="button-primary green">HELP</button>
            <button className="button-primary green">MENU</button>
            <button className="button-primary green">HIST</button>
            <button name="PEOP" onClick={this.addPill} className="button-primary margin">Peop</button>
            <button name="ANTI" onClick={this.addPill} className="button-primary ">Anti</button>
            <button name="MTHD" onClick={this.addPill} className="button-primary margin" >Mthd</button>
            <button name="TISU" onClick={this.addPill} className="button-primary" >Tisu</button>
            <button name="GENE" onClick={this.addPill} className="button-primary margin">Gene</button>
          </div>
        </div>
        <div className="row">
          <input className="lookup" type="text" value={currentSearch} onChange={(e)=>updateSearch(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
