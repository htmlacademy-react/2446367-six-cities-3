import { getUserName } from './get-user-name';

describe('Function: getUserName', () => {
  it('should return the first word from a two word string', () => {
    expect(getUserName('John Doe')).toBe('John');
  });

  it('should return the first word from a three word string', () => {
    expect(getUserName('John Van Doe')).toBe('John');
  });

  it('should return an empty string if an empty string is passed', () => {
    expect(getUserName('')).toBe('');
  });
});
