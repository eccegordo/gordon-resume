import Ember from 'ember';
// conventions
// about path = '../portfolioFiles/PROJECT_ID/about.md'
// imagePath prefix = '../portfolioFiles/PROJECT_ID/'

export default Ember.Service.extend({
  porfolioPublicPathPrefix: 'portfolioFiles/',
  items: Ember.A([
    { 
      id: 'dellemc',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        ])
    },
    { 
      id: 'isilon',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        ])
    },
    { 
      id: 'atthespine.org',
      imagePaths: Ember.A(['img1.jpg'])
    },
    { 
      id: 'colinspring.com',
      imagePaths: Ember.A(['img1.jpg'])
    },
    { 
      id: 'georgefearingforcongress.com',
      imagePaths: Ember.A(['img1.jpg'])
    },
    { 
      id: 'globalseepej.org',
      imagePaths: Ember.A([ 'img1.jpg'])
    },
    { 
      id: 'lockdownnetworks.com',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg'
        ])
    },
    { 
      id: 'murdersilence.com',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg'
        ])
    },
    { 
      id: 'tapintupdapp',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg'
        ])
    },
    { 
      id: 'trimergence.com',
      imagePaths: Ember.A([ 
        'img1.jpg',
        'img2.jpg',
        'img3.jpg'
        ])
    },
  ])
});
