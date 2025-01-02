type OfferInsideItemProps = {
  item: string;
};

export default function OfferInsideItem({ item }: OfferInsideItemProps) {
  return <li className="offer__inside-item">{item}</li>;
}
