const test = require('node:test');
const assert = require('node:assert');

test('sanity check passes', () => {
  assert.strictEqual(1 + 1, 2);
});
