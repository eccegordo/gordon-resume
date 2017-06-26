import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  portfolioData: Ember.inject.service('portfolio-data'),
  model(params) {
    let portfolioData = get(this, 'portfolioData');
    let items = portfolioData.get('items');
    return items.findBy('id', params.portfolio_id);
  }
});