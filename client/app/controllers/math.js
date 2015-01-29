import Ember from 'ember';

var MathController = Ember.ObjectController.extend({
  actions: {
    calculate: function() {
      this.get('model').forEach((field) => {
        console.log('field.answer: ', field.answer);
        var attempt = parseInt(field.attempt);
        console.log('attempt: ', attempt);
        if(field.answer !== attempt) {
          console.log('matt');
          var msg = "Wrong answer, Aaron! Think again!";
          field.set('reason', msg);
        } else {
          field.set('reason', null);
        }
      });
    }
  }
});

export default MathController;
