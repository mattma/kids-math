import Ember from 'ember';
import questionBuilder from 'rocks/mixins/question-builder';

var AdditionRoute = Ember.Route.extend(questionBuilder, {
  model: function () {
    var questionsArray = this.buildQuestion();
    var data = {
      questions: questionsArray,
      correct: 0,
      percentage: false,
      title: 'Addition'
    };
    return data;
  }
});

export default AdditionRoute;
