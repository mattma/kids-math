import Ember from 'ember';

var MathController = Ember.ArrayController.extend({
  answers:  Ember.computed.mapBy('model', 'answer'),
  actions: {
    calculate: function() {
      var answers = this.get('answers');
      console.log('answers: ', answers);
    }
  }
});

export default MathController;
