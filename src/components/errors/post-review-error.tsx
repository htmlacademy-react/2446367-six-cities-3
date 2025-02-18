import { memo } from 'react';

import './css/post-review-error.css';

function BasePostReviewError() {
  return (
    <div className="reviews__error">
      Only authorized users can post comments.
    </div>
  );
}

export const PostReviewError = memo(BasePostReviewError);
