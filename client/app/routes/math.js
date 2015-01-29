import Ember from 'ember';

var MathRoute = Ember.Route.extend({
  model: function () {
    var range = [1,2,3,4,5,6,7,8,9];
    function getIndex() {
      return Math.floor(Math.random() * range.length);
    }
    var totalQuestions = 20;
    var questionsArray = [];

    for(var i = 0, l = totalQuestions; i < l; i++) {
      var field1 = range[getIndex()];
      var field2 = range[getIndex()];
      var answer = field1 + field2;
      var question = Ember.Object.create({
        field1: field1,
        field2: field2,
        answer: answer,
        attempt: null,
        reason: null
      });
      questionsArray.push(question);
    }

    var data = {
      questions: questionsArray,
      correct: 0,
      percentage: '0%'
    };
    return data;
  }
});

export default MathRoute;
