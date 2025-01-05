import { Goods } from '../../mocks/mock-types/offers';
import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideListProps = {
  goods: Goods[];
};

export default function OfferInsideList({
  goods,
}: OfferInsideListProps) {
  return (
    <ul className="offer__inside-list">
      {goods.map((item) => (
        <OfferInsideItem item={item.title} key={item.id} />
      ))}
    </ul>
  );
}
