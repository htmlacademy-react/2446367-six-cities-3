import { Link } from 'react-router-dom';

import './css/not-found-page.css';

export default function NotFoundPage() {
  return (
    <div className="not-found__container">
      <div className="not-found">
        <p className="not-found__descr">404. Not Found</p>
      </div>
      <p className="not-found__link">
        <Link to="/">Вернуться на главную</Link>
      </p>
    </div>
  );
}
