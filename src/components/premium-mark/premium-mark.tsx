type PremiumMarkProps = {
  bemBlock: 'offer' | 'place-card';
};

export default function PremiumMark({
  bemBlock = 'place-card',
}: PremiumMarkProps) {
  const className = `${bemBlock}__mark`;
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}
