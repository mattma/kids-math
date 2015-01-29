import Ember from 'ember';

var MathRoute = Ember.Route.extend({
  model: function () {
    var question1 = Ember.Object.create({
      id: 0,
      field1: 1,
      field2: 2,
      answer: 3,
      attempt: null,
      reason: null
    });
    var question2 = Ember.Object.create({
      id: 1,
      field1: 1,
      field2: 3,
      answer: 4,
      attempt: null,
      reason: null
    });

    var data = [
      question1, question2
    ];
    return data;
  }
});

export default MathRoute;
