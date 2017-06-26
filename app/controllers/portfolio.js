import Ember from 'ember';

export default Ember.Controller.extend({
  portfolioData: Ember.inject.service('portfolio-data'),
});
