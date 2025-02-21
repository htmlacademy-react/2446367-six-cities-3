import { randomArrayIndex } from './random-array-index';

describe('Function: randomArrayIndex', () => {
  it('should return any value from the given array', () => {
    const array = [1, 2, 3];
    const index = randomArrayIndex(array);
    expect(array).toContain(array[index]);
  });
});
