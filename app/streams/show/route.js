import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  model({slug}) {
    return this.store.query('stream', {
      filter: { slug: { exact: slug } }
    }).then(items=>items.get('firstObject'));
  }
});
