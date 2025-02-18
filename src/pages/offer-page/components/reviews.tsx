import { useAuth } from '../../../hooks/user-authorization';

import type { Review } from '../../../types/review';

import ReviewItem from './review-item';
import ReviewForm from './review-form';
import { PostReviewError } from '../../../components/errors/post-review-error';

type ReviewsProps = {
  currentReviews: Review[];
  offerID: string;
};

export default function Reviews({ currentReviews, offerID }: ReviewsProps) {
  const isAuthorized = useAuth();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{currentReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {currentReviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {isAuthorized ? <ReviewForm offerID={offerID} /> : <PostReviewError />}
    </section>
  );
}
