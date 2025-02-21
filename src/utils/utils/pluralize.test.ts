import { pluralize } from './pluralize';

describe('Function: pluralize', () => {
  it('should return a single string number when passed one', () => {
    expect(pluralize(1, 'Bedroom')).toBe('1 Bedroom');
  });

  it('should return the plural of the string when passed a value greater than one', () => {
    expect(pluralize(2, 'Adult')).toBe('2 Adults');
  });
});
