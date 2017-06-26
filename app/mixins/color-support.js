import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  classNameBindings: ['_colorClassString'],
  colorName: 'blue',
  colorDepth: 0,
  colorIndex: 0,
  _colorClassString: computed('colorName', 'colorDepth', 'colorIndex', function() {
    let name  = this.get('colorName');
    let depth = this.get('colorDepth');
    let index = this.get('colorIndex');
    if (index === 0 ){
      depth = 50;
    } else if (index >= 0 && index <= 9 ){
      depth = index * 100;
    } else if (index > 9) {
      if ((index % 10) === 0) { depth = "A100"; }
      if ((index % 11) === 0) { depth = "A200"; }
      if ((index % 12) === 0) { depth = "A400"; }
      if ((index % 13) === 0) { depth = "A700"; }
    }

    if (name === "primary") {
      return `mdl-color--primary`;
    } else if (name === "accent") {
      return `mdl-color--accent`;
    } else {
      return `mdl-color--${name}-${depth}`;
    }
  })
});