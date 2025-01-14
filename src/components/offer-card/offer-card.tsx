import PremiumMark from '../premium-mark/premium-mark';
import { Offer } from '../../mocks/mock-types/offers';
import { capitalizeFirstLetter, convertStarToWidth } from '../../utils/utils';
import { Link } from 'react-router-dom';

type OfferCardProps = {
  offer: Offer;
  pageClassName: string;
  onActiveOffer?: (offer?: Offer) => void;
};

export default function OfferCard({
  offer,
  pageClassName,
  onActiveOffer,
}: OfferCardProps) {
  const {
    id,
    title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    previewImage,
  } = offer;

  const handleActiveOn = () => {
    onActiveOffer?.(offer);
  };

  const handleActiveOff = () => {
    onActiveOffer?.();
  };

  return (
    <article
      className={`${pageClassName}__card place-card`}
      onMouseEnter={handleActiveOn}
      onMouseLeave={handleActiveOff}
    >
      {isPremium && <PremiumMark />}
      <div
        className={`${pageClassName}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertStarToWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}
