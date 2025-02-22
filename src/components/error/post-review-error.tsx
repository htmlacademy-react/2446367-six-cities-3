import { memo } from 'react';

import './css/post-review-error.css';

function BasePostReviewError() {
  return (
    <div className="reviews__error">
      Only authorized users can post comments.
    </div>
  );
}

const PostReviewError = memo(BasePostReviewError);

export default PostReviewError;
