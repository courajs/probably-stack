import Ember from 'ember';

const {
  Route,
  get
} = Ember;

export default Route.extend({
  model() {
    return this.store.query('stream', {
      "filter[date][range][gte]": "now/d",
      "page[size]": 1,
      sort: "date",
      branch: 'draft'
    }).then(a => get(a, 'firstObject'));
  }
});
