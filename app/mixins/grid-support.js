import Ember from 'ember';

const { computed, Mixin } = Ember;
const { isBlank, isPresent, get } = Ember;

export default Mixin.create({
  classNameBindings: ['_colClassString', '_responsiveClassString'],
  ratio: null,
  col: 12, // a vanilla column should be full grid
  rcol: null, // leaver blank because we want this optional
  r: 'desktop', // the mobile responsive: tablet, phone, desktop, etc
  _colClassString: computed('ratio', 'col', function() {
    // mdl-cell--1-col
    let ratio = get(this, 'ratio');
    let col = get(this, 'col');

    if (isPresent(ratio)){
      let c = Math.round(12 / parseInt(ratio));
      return `mdl-cell--${c}-col`;
    }

    if (isBlank(col)){
      return '';
    }
    return `mdl-cell--${col}-col`;
  }),

  _responsiveClassString: computed('rcol', 'r', function() {
    // mdl-cell--8-col-tablet

    let rcol = get(this, 'rcol');
    let responsive = get(this, 'r');
    if (isBlank(rcol) || isBlank(responsive)){
      return '';
    }

    return `mdl-cell--${rcol}-col-${responsive}`;
  })
});