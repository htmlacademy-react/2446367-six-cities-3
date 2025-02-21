import { capitalizeFirstLetter } from './capitalize-first-letter';

describe('Function: capitalizeFirstLetter', () => {
  it('should return the first letter of the string in capital', () => {
    expect(capitalizeFirstLetter('string')).toBe('String');
  });

  it('should return the first letter of the first word of a string of multiple letters', () => {
    expect(capitalizeFirstLetter('string string')).toBe('String string');
  });

  it('should return an empty string if an empty string is passed', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});
