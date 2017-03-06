import { expect } from 'chai';
import window1 from '../../app/reducers/window1';
import { UPDATE_SEARCH } from '../../app/actions/window1';


describe('reducers', () => {
  describe('window1', () => {
    it('should handle initial state', () => {
      expect(window1(undefined, {})).to.deep.equal({ currentSearch: 'Try Pink1 GENE', facets: {} });
    });

    //it('should handle INCREMENT_COUNTER', () => {
      //expect(counter(1, { type: INCREMENT_COUNTER })).to.equal(2);
    //});

    //it('should handle DECREMENT_COUNTER', () => {
      //expect(counter(1, { type: DECREMENT_COUNTER })).to.equal(0);
    //});

    //it('should handle unknown action type', () => {
      //expect(counter(1, { type: 'unknown' })).to.equal(1);
    //});
  });
});
