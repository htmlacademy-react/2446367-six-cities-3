import { format } from 'date-fns';

import type { Review } from '../../../types/review';

import { convertStarToWidth, getUserName } from '../../../utils/utils';

type ReviewItemProps = {
  review: Review;
};

export default function ReviewItem({ review }: ReviewItemProps) {
  const {
    date,
    user: { avatarUrl, name },
    comment,
    rating,
  } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{getUserName(name)}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: convertStarToWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {format(date, 'LLLL y')}
        </time>
      </div>
    </li>
  );
}
