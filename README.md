### selectChoose() works as expected in acceptance tests:

```js
// PASSES
test('can select an item from dropdown', function(assert) {
  visit('/select-page');
  selectChoose('.select-container', 'b');

  andThen(function() {
    assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
  });
});
```
### selectChoose() fails in integration tests:

```js
test('can use selectChoose', function(assert) {
  this.render(hbs`{{select-list}}`);
  selectChoose('.select-container', 'b');
  assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
});

// expects 'b' but is 'a'
```

a `debugger;` between above the assert will show that selectChoose is opening the dropdown, but not selecting an option.

`andThen()` is not available in integration tests, so we can try it with a `wait()`

```js
test('can use selectChoose with wait()', function(assert) {
  this.render(hbs`{{select-list}}`);
  selectChoose('.select-container', 'b');

  return wait()
    .then(() => {
    assert.equal($('.ember-power-select-selected-item').text().trim(), 'b')
  });
})

// still fails expecting 'b', but getting 'a'
```
