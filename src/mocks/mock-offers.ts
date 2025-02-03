import { Offers } from './mock-types/offers';

export const mockOffers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Luxurious apartments in a great location',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [ 'Heating', 'Wi-Fi', 'Kitchen', 'Fridge', 'Washing Machine',
      // {id: 0, title: 'Heating'},
      // {id: 1, title: 'Wi-Fi'},
      // {id: 2, title: 'Kitchen'},
      // {id: 3, title: 'Fridge'},
      // {id: 4, title: 'Washing Machine'},
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [ 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg',
      // {id: 0, src: 'img/apartment-01.jpg'},
      // {id: 1, src: 'img/apartment-02.jpg'},
      // {id: 2, src: 'img/apartment-03.jpg'},
    ],
    maxAdults: 4,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [ 'Heating', 'Wi-Fi', 'Kitchen',
      // {id: 0, title: 'Heating'},
      // {id: 1, title: 'Wi-Fi'},
      // {id: 2, title: 'Kitchen'},
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [ 'img/apartment-03.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg',
      // {id: 2, src: 'img/apartment-03.jpg'},
      // {id: 1, src: 'img/apartment-02.jpg'},
      // {id: 0, src: 'img/apartment-01.jpg'},
    ],
    maxAdults: 2,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [ 'Heating', 'Wi-Fi', 'Kitchen', 'Fridge', 'Dishwasher',
      // {id: 0, title: 'Heating'},
      // {id: 1, title: 'Wi-Fi'},
      // {id: 2, title: 'Kitchen'},
      // {id: 3, title: 'Fridge'},
      // {id: 5, title: 'Dishwasher'},
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [ 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg',
      // {id: 1, src: 'img/apartment-02.jpg'},
      // {id: 0, src: 'img/apartment-01.jpg'},
      // {id: 2, src: 'img/apartment-03.jpg'},
    ],
    maxAdults: 3,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Cozy and quiet room',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/room.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [ 'Heating', 'Wi-Fi', 'Coffee machine', 'Cabel TV',
      // {id: 0, title: 'Heating'},
      // {id: 1, title: 'Wi-Fi'},
      // {id: 6, title: 'Coffee machine'},
      // {id: 7, title: 'Cabel TV'},
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: [ 'img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg',
      // {id: 2, src: 'img/room.jpg'},
      // {id: 1, src: 'img/apartment-02.jpg'},
      // {id: 0, src: 'img/apartment-01.jpg'},
    ],
    maxAdults: 2,
  },
];
