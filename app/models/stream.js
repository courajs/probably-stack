import DS from 'ember-data';

export default DS.Model.extend({
  type: 'stream',

  slug: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('date'),
  description: DS.attr('string')
});
