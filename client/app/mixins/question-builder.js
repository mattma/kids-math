import Ember from 'ember';
import {range} from 'rocks/utils/range';

function getAnswer (field1, field2, method) {
  var ret;
  switch (method) {
    case 'addition':
      ret = field1 + field2;
      break;
    case 'subtract':
      ret = field1 - field2;
      break;
    case 'multiply':
      ret = field1 * field2;
      break;
    case 'divide':
      ret = field1 - field2;
      break;

  }
  return ret;
}

function getIndex (r) {
  return Math.floor(Math.random() * r.length);
}

function checkField (r) {
  var temp1 = Math.floor(Math.random() * r.length);
  var temp2 = Math.floor(Math.random() * r.length);
  if (temp1 > temp2) {
    return {
      temp1: temp1,
      temp2: temp2
    }
  } else {
    return {
      temp1: temp2,
      temp2: temp1
    }
  }
}

function getFields (r, method) {
  var ret = {};
  switch (method) {
    case 'addition':
      ret.field1 = r[getIndex(r)];
      ret.field2 = r[getIndex(r)];
      break;
    case 'subtract':
      var temp = checkField(r);
      ret.field1 = temp.temp1;
      ret.field2 = temp.temp2;
      break;
  }
  return ret;
}

var QuestionBuilderMixin = Ember.Mixin.create({
  buildQuestion: function (method) {
    var r = range(1, 20);
    var totalQuestions = 20;
    var questionsArray = [];

    for (var i = 0, l = totalQuestions; i < l; i++) {
      var fields = getFields(r, method);
      var field1 = fields.field1;
      var field2 = fields.field2;
      var answer = getAnswer(field1, field2, method);
      var question = Ember.Object.create({
        field1:  field1,
        field2:  field2,
        answer:  answer,
        attempt: null,
        reason:  null
      });
      questionsArray.push(question);
    }

    return questionsArray;
  }
});

export default QuestionBuilderMixin;
