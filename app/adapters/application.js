import DS from 'ember-data';
import Metable from 'ember-resource-metadata/adapter-mixin';
import Branchable from '@cardstack/tools/mixins/branch-adapter';

export default DS.JSONAPIAdapter.extend(Metable, Branchable, {
  namespace: 'cardstack'
});
