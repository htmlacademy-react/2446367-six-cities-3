import { useState, ReactEventHandler, FormEvent } from 'react';
import { useError } from '../../../hooks/use-error';
import { useActionCreators } from '../../../hooks/store';

import { ValidateError } from '../../../components/errors/validate-error';

import { userActions } from '../../../store/slices/user';
import { validatePassword } from '../../../utils/utils';

type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { error, setError } = useError();

  const { login } = useActionCreators(userActions);

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();

    if (!validatePassword(formData.password)) {
      setError('Пароль должен состоять минимум из одной буквы и цифры');
      return;
    }

    setError(null);
    login(formData);
  }
  return (
    <form
      className="login__form form"
      action="#"
      onSubmit={handleSubmit}
      method="post"
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className={`login__input form__input ${error ? 'shake' : ''}`}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        {error && <ValidateError />}
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}
