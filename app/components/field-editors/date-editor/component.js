import Ember from 'ember';

export default Ember.Component.extend({
  initialValue: Ember.computed('content', 'field', function() {
    let field = this.get('field');
    let d = this.set('content.'+field);
    return d ? d.toISOString() : new Date().toISOString();
  }),
  actions: {
    update(e) {
      let d = new Date(e.target.value);
      if (d && !isNaN(d)) {
        let field = this.get('field');
        this.set('content.'+field, d);
      }
    }
  }
});
