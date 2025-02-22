import { useActionCreators } from '../../../hooks/store';
import {
  FormEvent,
  Fragment,
  ReactEventHandler,
  useCallback,
  useState,
} from 'react';

import { toast } from 'react-toastify';

import { reviewsActions } from '../../../store/slices/review/review';
import { rating } from '../../../utils/data/data';

type ReviewFormProps = {
  offerID: string;
};

type ChangeReviewHandler = ReactEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;

function BaseReviewForm({ offerID }: ReviewFormProps) {
  const { postComment } = useActionCreators(reviewsActions);
  const [comment, setComment] = useState({ comment: '', rating: 0 });

  const [isFormDisabled, setFormDisabled] = useState(false);

  const isValidComment =
    comment.comment.length >= 50 &&
    comment.comment.length <= 300 &&
    comment.rating !== 0;

  const handleReviewChange = useCallback<ChangeReviewHandler>(
    (evt) => {
      const { name, value } = evt.currentTarget;
      setComment({
        ...comment,
        [name]: name === 'rating' ? Number(value) : value,
      });
    },
    [comment],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setFormDisabled(true);
      if (isValidComment) {
        postComment({
          body: {
            comment: comment.comment,
            rating: Number(comment.rating),
          },
          offerID,
        })
          .unwrap()
          .then(() => {
            toast.success('Review posted!');
          })
          .then(() => {
            setComment({ rating: 0, comment: '' });
            setFormDisabled(false);
          })
          .catch(() => {
            toast.error('Error posting review');
          })
          .finally(() => {
            setFormDisabled(false);
          });
      }
    },
    [comment, isValidComment, offerID, postComment],
  );

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
              disabled={isFormDisabled}
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
        disabled={isFormDisabled}
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
          disabled={!isValidComment || isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

const ReviewForm = BaseReviewForm;

export default ReviewForm;
