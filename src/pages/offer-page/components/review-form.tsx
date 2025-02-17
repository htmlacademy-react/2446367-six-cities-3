import { useActionCreators } from '../../../hooks/store';

import { FormEvent, Fragment, ReactEventHandler, useState } from 'react';

import { rating } from '../../../utils/data';
import { reviewsActions } from '../../../store/slices/review';

type ReviewFormProps = {
  offerID: string;
};

type ChangeReviewHandler = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

export default function ReviewForm({ offerID }: ReviewFormProps) {
  const { postComment } = useActionCreators(reviewsActions);
  const [comment, setComment] = useState({ comment: '', rating: 0 });

  const handleReviewChange: ChangeReviewHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setComment({
      ...comment,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comment.comment.length >= 50 && comment.rating !== 0) {
      postComment({
        body: {
          comment: comment.comment,
          rating: Number(comment.rating),
        },
        offerID,
      }).then(() => {
        setComment({ rating: 0, comment: '' });
      });
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleReviewChange}
              checked={comment.rating === value}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleReviewChange}
        value={comment.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={comment.comment.length < 50 || comment.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
