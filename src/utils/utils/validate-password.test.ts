import { validatePassword } from './validate-password';

describe('Function: validatePassword', () => {
  it('should return "false" if all characters are numbers', () => {
    expect(validatePassword('1111')).toBe(false);
  });

  it('should return "false" if all characters are letters', () => {
    expect(validatePassword('aaaa')).toBe(false);
  });

  it('should return "true" when enter letters and numbers', () => {
    expect(validatePassword('aaaa1111')).toBe(true);
  });
});
