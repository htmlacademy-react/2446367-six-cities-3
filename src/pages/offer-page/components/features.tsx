import { capitalizeFirstLetter } from '../../../utils/utils';

type FeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

export function Features({ type, bedrooms, maxAdults }: FeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}
