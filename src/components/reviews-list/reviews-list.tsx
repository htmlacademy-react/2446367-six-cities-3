import { Reviews } from '../../mocks/mock-types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  currentReviews: Reviews;
}

export default function ReviewsList({currentReviews}: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {
        currentReviews.map((review, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ReviewsItem review={review} key={i} />
        ))
      }
    </ul>
  );
}
