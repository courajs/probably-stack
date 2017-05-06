import DS from 'ember-data';
import Metable from 'ember-resource-metadata/adapter-mixin';
import Branchable from '@cardstack/tools/mixins/branch-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, Metable, Branchable, {
  namespace: 'cardstack',
  authorizer: 'authorizer:cardstack'
});
