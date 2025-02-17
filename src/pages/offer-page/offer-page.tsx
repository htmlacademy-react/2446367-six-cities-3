import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import NotFoundPage from '../not-found-page/not-found-page';
import Map from '../../components/map/map';
import Spinner from '../../components/spinner/spinner';
import Goods from './components/goods';
import Gallery from './components/gallery';
import Nearby from './components/nearby';
import Host from './components/host';
import Reviews from './components/reviews';
import Features from './components/features';

import { RequestStatus } from '../../utils/data';
import { offerActions, offerSelector } from '../../store/slices/offer';
import { reviewsActions, reviewsSelector } from '../../store/slices/review';

export default function OfferPage() {
  const { id } = useParams();

  const offer = useAppSelector(offerSelector.offer);
  const status = useAppSelector(offerSelector.status);
  const nearbyOffers = useAppSelector(offerSelector.nearby);
  const reviews = useAppSelector(reviewsSelector.items);
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
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button
                className={`offer__bookmark-button ${isFavorite && 'offer__bookmark-button--active'} button`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {Math.round(rating)}
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
          offers={[...nearbyOffers, offer]}
        />
      </section>
      <div className="container">
        <Nearby nearOffers={nearbyOffers} />
      </div>
    </>
  );
}
