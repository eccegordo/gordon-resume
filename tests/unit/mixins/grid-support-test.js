import Ember from 'ember';
import GridSupportMixin from 'gordon-resume/mixins/grid-support';
import { module, test } from 'qunit';

module('Unit | Mixin | grid support');

// Replace this with your real tests.
test('it works', function(assert) {
  let GridSupportObject = Ember.Object.extend(GridSupportMixin);
  let subject = GridSupportObject.create();
  assert.ok(subject);
});
