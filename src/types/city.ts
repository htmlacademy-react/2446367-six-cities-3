import { CITIES } from '../utils/data';
import { Location } from './location';

export type CityName = (typeof CITIES)[number]['name'];
export type CityId = (typeof CITIES)[number]['id'];

export type City = {
  location: Location;
  name: CityName;
};
