// @flow
import React, { Component } from 'react';
import PillRow from './PillRow';


class SearchBar extends Component {
  addPill = (e)=> {
    const { updateSearch, currentSearch, addSearchPair, popSearchPair, fetchSearchResults } = this.props;
    addSearchPair({
      term: currentSearch,
      category: e.target.name
    });
    fetchSearchResults('');
    updateSearch('');
  }

  onKeyDown = (e)=> {
    const { updateSearch, addSearchPair, popSearchPair } = this.props;
    if(e.key === "]"){
      e.preventDefault();
      const inputVal=e.target.value;
      const lastStartBracketPos = inputVal.lastIndexOf('[');
      if(lastStartBracketPos > 0 && lastStartBracketPos < e.target.selectionStart){
        addSearchPair({
          term: inputVal.substring(0,lastStartBracketPos),
          category: inputVal.substring(lastStartBracketPos+1,e.target.selectionStart)
        });
        updateSearch('');
      }
    }
    else if(e.target.selectionStart === 0 && e.key === "Backspace"){
      popSearchPair();
    }
  }
  onChange = (e)=> {
    const { updateSearch } = this.props;
    updateSearch(e.target.value)
  }
  render = ()=> {
    const { currentSearch, updateSearch } = this.props;

    return (
      <div>
        <div className="row"> Hit &lt;HELP&gt; for more info,  &lt;MENU&gt; for list of Similar functions, &lt;HIST&gt; for last actions              </div>
        <div className="row">
          <div className="navBar">
            <button onClick={()=>showModal((<div>test</div>))} className="button-primary green">HELP</button>
            <button className="button-primary green">MENU</button>
            <button className="button-primary green">HIST</button>
            <button name="PEOP" onClick={this.addPill} className="button-primary margin">Peop</button>
            <button name="ANTI" onClick={this.addPill} className="button-primary ">Anti</button>
            <button name="MTHD" onClick={this.addPill} className="button-primary margin" >Mthd</button>
            <button name="TISU" onClick={this.addPill} className="button-primary" >Tisu</button>
            <button name="GENE" onClick={this.addPill} className="button-primary margin">Gene</button>
          </div>
        </div>
        <label className="row barContainer">
          <PillRow {...this.props}/>
          <div className="lookup">
            <input type="text"
               value={currentSearch}
               onKeyDown={this.onKeyDown}
               onChange={this.onChange} />
          </div>
        </label>
        <div className="row">
        </div>
      </div>
    );
  }
}

export default SearchBar;
