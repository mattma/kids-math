import Ember from 'ember';

/**
 * Handle URL between hash and history API automatically
 * ensure we don't share routes between all Router instances
 * @attr location: {string} // 'history', 'auto', 'hash'
 */
var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function () {
  this.resource('math', function () {

  });
});

export default Router;
