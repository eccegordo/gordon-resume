import Ember from 'ember';

const { get, set } = Ember;

export default Ember.Route.extend({
  portfolioData: Ember.inject.service('portfolio-data'),
  model(params) {
    let portfolioData = get(this, 'portfolioData');
    let items = portfolioData.get('items');
    return items.findBy('id', params.portfolio_id);
  },

  setupController(controller, model){
    let rootURL = get(this, 'router.rootURL');
    let portfolioData = get(this, 'portfolioData');
    let porfolioPublicPathPrefix = get(portfolioData, 'porfolioPublicPathPrefix');    
    let modelId = model.id;
    let prefix = `${rootURL}${porfolioPublicPathPrefix}${modelId}/`;

    let aboutPath = `${prefix}about.md`;
    set(controller, 'model', model);    
    set(controller, 'pathPrefix', prefix); 
    set(controller, 'aboutPath', aboutPath); 
  }
});