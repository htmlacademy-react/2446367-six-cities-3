import { Offers } from '../mocks/mock-types/offers';
import { CITIES, CityName } from '../utils/data';
import { mockOffers } from '../mocks/mock-offers';

interface OffersState {
  city: CityName;
  mockOffers: Offers;
}

const initialState: OffersState = {
  city: CITIES[0].name,
  mockOffers,
};

const enum ActionType {
  SetCity = 'offers/setCity',
}

export const setCity = (city: CityName) => ({
  payload: city,
  type: ActionType.SetCity,
});

export function reducer(
  state: OffersState = initialState,
  action: { payload: unknown; type: ActionType },
): OffersState {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as CityName,
      };
    default:
      return state;
  }
}
