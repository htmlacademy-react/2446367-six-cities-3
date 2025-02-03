import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideListProps = {
  goods: string[];
};

export default function OfferInsideList({
  goods,
}: OfferInsideListProps) {
  return (
    <ul className="offer__inside-list">
      {goods.map((item) => (
        <OfferInsideItem item={item} key={item} />
      ))}
    </ul>
  );
}
