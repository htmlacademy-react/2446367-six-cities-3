import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import NotFoundPage from '../not-found-page/not-found-page';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import Goods from './components/goods/goods';
import Gallery from './components/gallery/gallery';
import Nearby from './components/nearby/nearby';
import Host from './components/host/host';
import Reviews from './components/reviews/reviews';
import Features from './components/features/features';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import PremiumMark from '../../components/premium-mark/premium-mark';

import { RequestStatus } from '../../utils/data/data';
import { offerActions } from '../../store/slices/offer/offer';
import { reviewsActions } from '../../store/slices/review/review';
import {
  selectNearby,
  selectOffer,
  selectOfferStatus,
} from '../../store/selectors/offer';
import { selectReviews } from '../../store/selectors/review';
import { shuffle } from '../../utils/utils/shuffle';

const enum NearbyDefault {
  MaxCount = 3,
}

export default function OfferPage() {
  const { id } = useParams();

  const offer = useAppSelector(selectOffer);
  const status = useAppSelector(selectOfferStatus);
  const reviews = useAppSelector(selectReviews);

  const nearbyOffers = useAppSelector(selectNearby);
  const shuffledNearby = shuffle(nearbyOffers).slice(0, NearbyDefault.MaxCount);

  const { fetchNearBy, fetchOffer } = useActionCreators(offerActions);
  const { fetchComments } = useActionCreators(reviewsActions);

  useEffect(() => {
    Promise.all([
      fetchOffer(id as string),
      fetchNearBy(id as string),
      fetchComments(id as string),
    ]);
  }, [fetchOffer, fetchNearBy, fetchComments, id]);

  if (status === RequestStatus.Loading) {
    return <Spinner />;
  }

  if (status === RequestStatus.Failed || !offer) {
    return <NotFoundPage />;
  }

  const {
    bedrooms,
    description,
    city,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type,
  } = offer;

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <Gallery images={images} />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <PremiumMark bemBlock="offer" />}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <FavoriteButton
                bemBlock="offer"
                offerID={id as string}
                isFavorite={isFavorite}
                width={31}
              />
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {rating}
              </span>
            </div>
            <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <Goods goods={goods} />
            <Host description={description} host={host} />
            <Reviews currentReviews={reviews} offerID={id as string} />
          </div>
        </div>
        <Map
          className="offer__map"
          city={city.name}
          offers={[...shuffledNearby, offer]}
          isOfferPage
        />
      </section>
      <div className="container">
        <Nearby nearOffers={shuffledNearby} />
      </div>
    </>
  );
}
