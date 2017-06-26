import Ember from 'ember';
import TypographySupport from '../mixins/typography-support';

const { Component } = Ember;

export default Component.extend(TypographySupport, {
  tagName: 'span',
  classNameBindings: ['accent:accent-color'],
  accent: true
});
