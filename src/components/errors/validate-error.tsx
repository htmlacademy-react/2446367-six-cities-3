import { memo } from 'react';

import './css/validate-error.css';

export function BaseValidateError() {
  return (
    <div className="validate__error">
      Пароль должен состоять минимум из одной буквы и цифры
    </div>
  );
}

export const ValidateError = memo(BaseValidateError);
