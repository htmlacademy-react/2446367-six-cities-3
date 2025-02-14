import { useParams } from 'react-router-dom';
import { useActionCreators, useAppSelector } from '../../hooks/store';

import OfferImage from '../../components/offer-image/offer-image';
import ReviewForm from '../../components/review-form/review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import PostReviewError from '../../components/error/post-review-error';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import Map from '../../components/map/map';

import { AuthorizationStatus, RequestStatus } from '../../utils/data';
import { isUserLogged } from '../../mocks/mock-util';
import { capitalizeFirstLetter } from '../../utils/utils';
import { offerActions, offerSelector } from '../../store/slices/offer';
import { reviewsActions } from '../../store/slices/review';
import { useEffect } from 'react';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
};

export default function OfferPage({ authorizationStatus }: OfferPageProps) {
  const { id } = useParams();

  const offerPage = useAppSelector(offerSelector.offer);
  const status = useAppSelector(offerSelector.status);
  const nearbyOffers = useAppSelector(offerSelector.nearby);
  const reviews = useAppSelector((state) => state.reviews.items);
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
    return <div>Loading...</div>;
  }

  if (status === RequestStatus.Failed || !offerPage) {
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
  } = offerPage;

  const { avatarUrl, isPro, name } = host;

  return (
    <>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item) => (
              <OfferImage img={item} key={item} />
            ))}
          </div>
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
                {rating}
              </span>
            </div>
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
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <OfferInsideList goods={goods} />
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className='offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper'>
                  <img
                    className="offer__avatar user__avatar"
                    src={avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{name}</span>
                {isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {description}
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot;{' '}
                <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList currentReviews={reviews} />
              {isUserLogged(authorizationStatus) ? (
                <ReviewForm />
              ) : (
                <PostReviewError />
              )}
            </section>
          </div>
        </div>
        <Map
          className="offer__map"
          currentCity={city.name}
          currentOffers={[...nearbyOffers, offerPage]}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <NearPlacesList nearOffers={nearbyOffers} />
          </div>
        </section>
      </div>
    </>
  );
}
