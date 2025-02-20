import test from 'node:test';
import assert from 'node:assert/strict';
import { twice } from './util.ts';

test('twice()', () => {
  assert.equal(
    twice('hello'),
    'hellohello'
  );
});
