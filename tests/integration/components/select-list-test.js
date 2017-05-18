import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { clickTrigger, selectChoose } from '../../helpers/ember-power-select';
import wait from 'ember-test-helpers/wait';

moduleForComponent('select-list', 'Integration | Component | select list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{select-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#select-list}}
      template block text
    {{/select-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('item starts at a', function(assert) {
  this.render(hbs`{{select-list}}`);
  assert.equal($('.ember-power-select-selected-item').text().trim(), 'a');
})

test('can use clickTrigger', function(assert) {
  this.render(hbs`{{select-list}}`);
  clickTrigger('.select-container');
  assert.equal($('.ember-power-select-option').length, 3);
});

// FAILS
test('can use selectChoose', function(assert) {
  this.render(hbs`{{select-list}}`);
  selectChoose('.select-container', 'b');
  assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
});

// FAILS
test('can use selectChoose with wait()', function(assert) {
  this.render(hbs`{{select-list}}`);
  selectChoose('.select-container', 'b');

  return wait()
    .then(() => {
    assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
  });
})
