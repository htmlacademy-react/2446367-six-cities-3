import type { ServerOffer } from '../../types/offer';
import type { MouseEventHandler } from 'react';

import PremiumMark from '../premium-mark/premium-mark';
import FavoriteButton from '../favorite-button/favorite-button';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../utils/data/data';
import { capitalizeFirstLetter } from '../../utils/utils/capitalize-first-letter';

type OfferCardProps = {
  offer: ServerOffer;
  pageClassName: string;
  imageWrapperClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  handleActiveOn?: MouseEventHandler<HTMLElement>;
  handleActiveOff?: MouseEventHandler<HTMLElement>;
};

export default function OfferCard({
  offer,
  pageClassName,
  imageWrapperClassName = `${pageClassName}__image-wrapper place-card__image-wrapper`,
  imageWidth = 260,
  imageHeight = 200,
  handleActiveOn,
  handleActiveOff,
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

  return (
    <article
      className={`${pageClassName}__card place-card`}
      onMouseEnter={handleActiveOn}
      onMouseLeave={handleActiveOff}
      data-id={id}
    >
      {isPremium && <PremiumMark bemBlock="place-card" />}
      <div className={imageWrapperClassName}>
        <Link to={`${AppRoute.Offer.replace('/:id', '')}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
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
          <FavoriteButton
            bemBlock="place-card"
            offerID={id}
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer.replace('/:id', '')}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}
