import { memo } from 'react';

function BasePremiumMark() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

export const PremiumMark = memo(BasePremiumMark);
