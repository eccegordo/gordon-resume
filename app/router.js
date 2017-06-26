import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('resume');
  this.route('portfolio', function() {
    this.route('show', { path: ':portfolio_id' });
  });
  this.route('contact');
});

export default Router;
