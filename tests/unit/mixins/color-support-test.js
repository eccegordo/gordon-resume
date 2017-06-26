import Ember from 'ember';
import ColorSupportMixin from 'gordon-resume/mixins/color-support';
import { module, test } from 'qunit';

module('Unit | Mixin | color support');

// Replace this with your real tests.
test('it works', function(assert) {
  let ColorSupportObject = Ember.Object.extend(ColorSupportMixin);
  let subject = ColorSupportObject.create();
  assert.ok(subject);
});
