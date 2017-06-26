import Ember from 'ember';
import GridSupport from '../mixins/grid-support';
import ColorSupport from '../mixins/color-support';
const { Component } = Ember;

export default Component.extend(GridSupport, ColorSupport, {
  classNames: ['mdl-cell'],
  classNameBindings: ['mdl-cell', 'debug:debug'],
  debug: false,
  col: 12,
  colorName: null,
  colorDepth: 0,
  colorIndex: 0,
});