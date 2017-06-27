import Ember from 'ember';

export default Ember.Controller.extend({

  contactMethods: Ember.A([
    {
      title: "Github",
      url: "https://github.com/eccegordo",
      icon: "github",
      handle: "eccegordo"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/eccegordo",
      icon: "twitter",
      handle: "@eccegordo"
    },
    {
      title: "Linked In",
      url: "https://www.linkedin.com/in/gordonpotterseattle",
      icon: "linkedin",
      handle: "Gordon Potter"
    },
  ])
});
