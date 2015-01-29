import Ember from 'ember';

var MathController = Ember.ObjectController.extend({
  questions: Ember.computed.alias('model.questions'),
  actions: {
    calculate: function() {
      var counter = 0;
      var questions = this.get('questions');
      questions.forEach((field) => {
        var attempt = parseInt(field.attempt);
        if(field.answer !== attempt) {
          var msg = "Wrong answer, Aaron! Think again!";
          counter++;
          field.set('reason', msg);
        } else {
          field.set('reason', null);
        }
      });

      this.set('wrong', counter);
      this.set('correct', questions.length - counter );

      var percent = counter / questions.length;
      var percentage;
      if(percent === 1) {
        percentage = '0%';
      } else if (percent === 0) {
        percentage = '100%';
      } else {
        percentage = (100 - percent * 100) + '%';
      }
      this.set('percentage', percentage);
    }
  }
});

export default MathController;
