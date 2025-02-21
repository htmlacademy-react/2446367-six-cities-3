import { memo } from 'react';

import './css/spinner.css';

export function BaseSpinner() {
  return (
    <div className="spinner-container" role="status">
      <div className="spinner"></div>
    </div>
  );
}

export const Spinner = memo(BaseSpinner);
