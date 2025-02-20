import { createAppAsyncThunk } from '../../../hooks/store';

import type { FullOffer } from '../../../types/offer';
import type { Review } from '../../../types/review';

import { Endpoint } from '../../../utils/data';

const fetchComments = createAppAsyncThunk<Review[], FullOffer['id']>(
  'comments/fetch',
  async (offerID, { extra: api }) => {
    const response = await api.get<Review[]>(`${Endpoint.Comments}/${offerID}`);
    return response.data;
  },
);

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerID: FullOffer['id'];
};

const postComment = createAppAsyncThunk<Review, PostCommentProps>(
  'comments/post',
  async ({ body, offerID }, { extra: api }) => {
    const response = await api.post<Review>(
      `${Endpoint.Comments}/${offerID}`,
      body,
    );
    return response.data;
  },
);

export const commentsThunks = { fetchComments, postComment };
