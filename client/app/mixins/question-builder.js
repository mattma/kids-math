import Ember from 'ember';
import {range} from 'rocks/utils/range';

var QuestionBuilderMixin = Ember.Mixin.create({
  buildQuestion: function() {
    var r = range(1,20);

    function getIndex() {
      return Math.floor(Math.random() * r.length);
    }
    var totalQuestions = 20;
    var questionsArray = [];

    for(var i = 0, l = totalQuestions; i < l; i++) {
      var field1 = r[getIndex()];
      var field2 = r[getIndex()];
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

    return questionsArray;
  }
});

export default QuestionBuilderMixin;
