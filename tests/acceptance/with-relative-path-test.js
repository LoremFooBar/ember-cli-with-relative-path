import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | with relative path');

test('it appends route paths correctly', async function(assert) {
  await visit('/reasons');

  // Test top-level routes
  assert.dom('ul:nth-of-type(1) li:nth-of-type(1) a').hasAttribute(
    'href',
    '/reasons/good',
    'it appends route paths for top-level routes correctly'
  );

  await click('ul:nth-of-type(1) li:nth-of-type(1) a');

  // Test nested routes
  assert.dom('ul:nth-of-type(2) li:nth-of-type(1) a').hasAttribute(
    'href',
    '/reasons/good/create',
    'it appends route paths for nested routes correctly'
  );
});
