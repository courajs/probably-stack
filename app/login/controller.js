import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

export default Controller.extend({
  session: inject.service(),

  actions: {
    login(password) {
      return this.get('session').authenticate('authenticator:cardstack', 'open-sesame', { password });
    }
  }
});
