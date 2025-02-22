import LoginForm from './components/login-form';
import RandomCity from './components/random-city';

function BaseLoginPage() {
  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <LoginForm />
      </section>
      <RandomCity />
    </div>
  );
}

const LoginPage = BaseLoginPage;

export default LoginPage;
