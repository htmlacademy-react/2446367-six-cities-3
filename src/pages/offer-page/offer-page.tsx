import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';

import OfferImage from '../../components/offer-image/offer-image';
import ReviewForm from '../../components/review-form/review-form';
import NotFoundPage from '../not-found-page/not-found-page';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import PostReviewError from '../../components/error/post-review-error';
import ReviewsList from '../../components/reviews-list/reviews-list';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import Map from '../../components/map/map';

import { AuthorizationStatus } from '../../utils/data';
import { isUserLogged } from '../../mocks/mock-util';
import { Offer } from '../../mocks/mock-types/offers';
import { capitalizeFirstLetter, getOfferRating } from '../../utils/utils';
import { Review, Reviews } from '../../mocks/mock-types/reviews';
import { offersSelectors } from '../../store/slices/offers';

type OfferPageProps = {
  authorizationStatus: AuthorizationStatus;
  mockReviews: Reviews;
};

export default function OfferPage({
  authorizationStatus,
  mockReviews,
}: OfferPageProps) {
  const { id } = useParams();
  const mockOffers = useAppSelector(offersSelectors.offers);
  const currentOffer = mockOffers.find((offer: Offer) => offer.id === id);

  const nearOffers = mockOffers.filter(
    (offer: Offer) =>
      currentOffer?.city.name === offer.city.name &&
      currentOffer.id !== offer.id,
  );

  const currentReviews = mockReviews.filter(
    (review: Review) => review.id === id,
  );

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const {
    title,
    type,
    price,
    isFavorite,
    isPremium,
    bedrooms,
    goods,
    images,
    maxAdults,
  } = currentOffer;

  const { offerRating, starRating } = getOfferRating(currentReviews);

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
                <span style={{ width: starRating }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {offerRating}
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
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src="img/avatar-angelina.jpg"
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
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
                <span className="reviews__amount">{currentReviews.length}</span>
              </h2>
              <ReviewsList currentReviews={currentReviews} />
              {isUserLogged(authorizationStatus) ? (
                <ReviewForm />
              ) : (
                <PostReviewError />
              )}
            </section>
          </div>
        </div>
        <Map className="offer__map" currentOffers={nearOffers} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <NearPlacesList nearOffers={nearOffers} />
          </div>
        </section>
      </div>
    </>
  );
}
