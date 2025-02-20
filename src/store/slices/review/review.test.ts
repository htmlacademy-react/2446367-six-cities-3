import { describe } from 'vitest';
import { reviewSlice } from '././review';
import { RequestStatus } from '../../../utils/data';
import { commentsThunks } from '../../thunks/comments/comments';
import { mockReview } from '../../../utils/mock-data';

describe('reviewSlice', () => {
  it('should return initial state', () => {
    const state = reviewSlice.reducer(undefined, { type: 'unknown' });
    expect(state).toEqual({
      items: [],
      status: RequestStatus.Idle,
    });
  });

  it('should handle fetchComments.fulfilled', () => {
    const action = {
      type: commentsThunks.fetchComments.fulfilled.type,
      payload: [mockReview],
    };
    const state = reviewSlice.reducer(undefined, action);
    expect(state).toEqual({
      items: [mockReview],
      status: RequestStatus.Success,
    });
  });

  it('should handle postComment.fulfilled', () => {
    const initialState = {
      items: [],
      status: RequestStatus.Idle,
    };
    const action = {
      type: commentsThunks.postComment.fulfilled.type,
      payload: mockReview,
    };
    const state = reviewSlice.reducer(initialState, action);
    expect(state.items).toEqual([mockReview]);
  });
});
