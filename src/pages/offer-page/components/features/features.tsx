import { memo } from 'react';

import { capitalizeFirstLetter } from '../../../../utils/utils/capitalize-first-letter';
import { pluralize } from '../../../../utils/utils/pluralize';

type FeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

function FeaturesInner({ type, bedrooms, maxAdults }: FeaturesProps) {
  const bedroomsCount = pluralize(bedrooms, 'Bedroom');
  const adultsCount = `Max ${pluralize(maxAdults, 'adult')}`;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalizeFirstLetter(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedroomsCount}
      </li>
      <li className="offer__feature offer__feature--adults">{adultsCount}</li>
    </ul>
  );
}

const Features = memo(FeaturesInner);

export default Features;
