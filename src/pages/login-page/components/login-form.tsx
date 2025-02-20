import {
  useState,
  ReactEventHandler,
  FormEvent,
  memo,
  useCallback,
} from 'react';
import { useActionCreators } from '../../../hooks/store';

import { toast } from 'react-toastify';

import { userActions } from '../../../store/slices/user';
import { validatePassword } from '../../../utils/utils';

type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function BaseLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);

  const { login } = useActionCreators(userActions);

  const handleChange = useCallback<ChangeHandler>(
    (evt) => {
      const { name, value } = evt.currentTarget;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLLoginForm>) => {
      event.preventDefault();

      if (!validatePassword(formData.password)) {
        setError(
          'The password must contain at least one letter and one number',
        );
        toast.error(
          'The password must contain at least one letter and one number',
        );
        return;
      }

      setError(null);
      login(formData);
    },
    [formData, login, setError],
  );

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
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export const LoginForm = memo(BaseLoginForm);
