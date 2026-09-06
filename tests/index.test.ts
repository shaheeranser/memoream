import { describe, it, expect } from 'vitest';
import * as memoream from '../src/index.js';

describe('memoream', () => {
  it('exposes a public API', () => {
    expect(memoream).toBeDefined();
  });
});