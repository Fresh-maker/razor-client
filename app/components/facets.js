// @flow
import React, { Component } from 'react';

class Facets extends Component {
  render() {
    const { updateFacet, facets } = this.props;
    return (
      <div className="facets">
        Journal:<br/>
        {
          ['Cell', 'Nature','Elsevier','Science'].map( (journal)=> {
            const jlc = journal.toLowerCase();
            return (<div key={jlc}>
                      <input onChange={updateFacet} id={"journal-"+jlc}
                        value={jlc} name={"journal"} type="checkbox"/>
                      <label htmlFor={"journal-"+jlc}>{journal}</label>
                    </div>)
          })
        }

        In Vitro: <input onChange={updateFacet} value="in-vitro" name="invitroInvivo" type="radio"/><br/>
        In Vivo: <input onChange={updateFacet} value="in-vivo" name="invitroInvivo" type="radio"/><br/>
        Publication Type: <br/>
        Original Research: <input onChange={updateFacet} value="originalResearch" name="publicationType" type="radio"/><br/>
        Review: <input onChange={updateFacet} value="review" name="publicationType" type="radio"/><br/>
        Patent: <input onChange={updateFacet} value="patent" name="publicationType" type="radio"/><br/>
      </div>
    );
  }
}

export default Facets;
