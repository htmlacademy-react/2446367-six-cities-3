import './css/spinner.css';

export function BaseSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export const Spinner = BaseSpinner;
