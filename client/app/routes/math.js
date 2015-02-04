import Ember from 'ember';
import questionBuilder from 'rocks/mixins/question-builder';

var MathRoute = Ember.Route.extend(questionBuilder, {
  model: function () {
    var questionsArray = this.buildQuestion();
    var data = {
      questions: questionsArray,
      correct: 0,
      percentage: false,
      title: 'Addtion'
    };
    return data;
  }
});

export default MathRoute;
