import Ember from 'ember';
import questionBuilder from 'rocks/mixins/question-builder';

var SubtractRoute = Ember.Route.extend(questionBuilder, {
  model: function () {
    var questionsArray = this.buildQuestion('subtract');
    var data = {
      questions: questionsArray,
      correct: 0,
      percentage: false,
      title: 'Subtraction',
      operator: '-'
    };
    return data;
  }
});

export default SubtractRoute;
