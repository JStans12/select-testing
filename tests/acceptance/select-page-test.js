import { test } from 'qunit';
import moduleForAcceptance from 'select-testing/tests/helpers/module-for-acceptance';

import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';
registerPowerSelectHelpers();

moduleForAcceptance('Acceptance | select page');

// PASSES
test('can select an item from dropdown', function(assert) {
  visit('/select-page');
  selectChoose('.select-container', 'b');

  andThen(function() {
    assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
  });
});
