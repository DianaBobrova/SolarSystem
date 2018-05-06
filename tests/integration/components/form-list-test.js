import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-list', 'Integration | Component | form list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-list}}`);
  let length = this.$('li').length;
  this.set('length', length);
  let position = [];
  this.set('position', position);
  assert.equal(length, 10, 'The hole Solar System is here');
  for(let i = 0; i < length; i++) {
    i < 4 ? position[i] = i : position[i] = position[i-1] + position[i-2];
    assert.equal(this.$('.badge')[i].innerText, position[i], `${i}th position is right`);
    assert.ok(this.$('[draggable = true]')[0], `${i}th item is draggable`);
  };
});
