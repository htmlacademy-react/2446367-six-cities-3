import { useAuth } from '../../../../hooks/user-authorization';

import type { Review } from '../../../../types/review';

import PostReviewError from '../../../../components/error/post-review-error';
import ReviewItem from '../review-item/review-item';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  currentReviews: Review[];
  offerID: string;
};

const enum CommentDefault {
  MaxCount = 10,
}

export default function Reviews({ currentReviews, offerID }: ReviewsProps) {
  const isAuthorized = useAuth();
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{currentReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {currentReviews.slice(0, CommentDefault.MaxCount).map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {isAuthorized ? <ReviewForm offerID={offerID} /> : <PostReviewError />}
    </section>
  );
}
