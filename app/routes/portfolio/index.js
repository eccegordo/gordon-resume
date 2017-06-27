import Ember from 'ember';
const { get, set } = Ember;

export default Ember.Route.extend({
  portfolioData: Ember.inject.service('portfolio-data'),
  setupController(controller, model){
    let rootURL = get(this, 'router.rootURL');
    let portfolioData = get(this, 'portfolioData');
    let porfolioPublicPathPrefix = get(portfolioData, 'porfolioPublicPathPrefix');    
    let prefix = `${rootURL}${porfolioPublicPathPrefix}`;
    set(controller, 'pathPrefix', prefix); 
  }  
});
