import Ember from 'ember';

var MathRoute = Ember.Route.extend({
  model: function () {
    var data = [
      [{
        field1: 1,
        field2: 2,
        answer: 3
      }],
      [{
        field1: 1,
        field2: 3,
        answer: 4
      }]
    ];
    return data;
  }
});

export default MathRoute;
