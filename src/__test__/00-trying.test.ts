// sum.js
import { expect, it } from 'vitest';

export function sum(a: number, b: number): number {
  return a + b;
}
// Returns the sum of two positive integers
it('should return the sum of two positive integers', () => {
  expect(sum(2, 3)).toBe(5);
});
