import { memo } from 'react';

type PremiumMarkProps = {
  bemBlock: 'offer' | 'place-card';
};

function BasePremiumMark({ bemBlock = 'place-card' }: PremiumMarkProps) {
  const className = `${bemBlock}__mark`;
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export const PremiumMark = memo(BasePremiumMark);
