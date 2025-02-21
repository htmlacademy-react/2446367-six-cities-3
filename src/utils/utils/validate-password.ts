export const validatePassword = (password: string): boolean => {
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasLetter && hasNumber;
};
