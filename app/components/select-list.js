import Ember from 'ember';

export default Ember.Component.extend({
  selectItems: ['a','b','c'],
  item: ['a'],
  actions: {
    chooseItem(item) {
      this.set('item', item)
    }
  }
});
