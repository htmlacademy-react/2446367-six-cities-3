import { City } from './city';
import { Location } from './location';

export type ServerOffer = {
  city: City;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type FullOffer = ServerOffer & {
  bedrooms: number;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    isPro: boolean;
    name: string;
  };
  images: string[];
  maxAdults: number;
}
