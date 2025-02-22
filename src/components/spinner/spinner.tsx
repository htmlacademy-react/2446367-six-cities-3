import { memo } from 'react';

import './css/spinner.css';

function BaseSpinner() {
  return (
    <div className="spinner-container" role="status">
      <div className="spinner"></div>
    </div>
  );
}

const Spinner = memo(BaseSpinner);

export default Spinner;
