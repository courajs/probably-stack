import DS from 'ember-data';
import BranchAdapter from '@cardstack/tools/mixins/branch-adapter';

export default DS.JSONAPIAdapter.extend(BranchAdapter, {
  namespace: 'cardstack'
});
