import Ember from 'ember';
import TypographySupportMixin from 'gordon-resume/mixins/typography-support';
import { module, test } from 'qunit';

module('Unit | Mixin | typography support');

// Replace this with your real tests.
test('it works', function(assert) {
  let TypographySupportObject = Ember.Object.extend(TypographySupportMixin);
  let subject = TypographySupportObject.create();
  assert.ok(subject);
});
