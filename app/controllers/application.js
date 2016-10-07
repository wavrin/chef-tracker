import Ember from 'ember';

export default Ember.Controller.extend({
  newChef: null,
  chefLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model', 'isCooking', true),
  actions: {
    makeCooking(chef) {
      Ember.set(chef, 'isCooking', true);
      chef.save();
    },
    makeNotCooking(chef) {
      Ember.set(chef, 'isCooking', false);
      chef.save();
    },
    saveNewChef() {
      this.store.createRecord('chef', {
        isCooking: false,
        name: this.get('newChef')
      }).save();
      Ember.set(this, 'newChef', '');
    },
    destroyChef(chef) {
      chef.destroyRecord();
    }
  }
});
