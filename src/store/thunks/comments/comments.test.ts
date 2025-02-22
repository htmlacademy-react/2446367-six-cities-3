import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';

import type { State } from '../../../utils/mock-data/mock-data';
import type { Action } from '@reduxjs/toolkit';
import type { Review } from '../../../types/review';

import { describe } from 'vitest';
import { AppThunkDispatch, mockReview } from '../../../utils/mock-data/mock-data';
import { Endpoint } from '../../../utils/data/data';
import { commentsThunks } from './comments';

import { createApi } from '../../../services/api';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { extractActionsTypes } from '../../../utils/mock-data/mock-data';

describe('Offers async', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  it('should fetch comments with "fetchComments.fulfilled"', async () => {
    const offerID = '1';
    const mockComments: Review[] = [mockReview, mockReview];

    mockAxiosAdapter
      .onGet(`${Endpoint.Comments}/${offerID}`)
      .reply(200, mockComments);

    await store.dispatch(commentsThunks.fetchComments(offerID));

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<
      typeof commentsThunks.fetchComments.fulfilled
    >;
    expect(extractedActionsTypes).toEqual([
      commentsThunks.fetchComments.pending.type,
      commentsThunks.fetchComments.fulfilled.type,
    ]);
    expect(fetchCommentsActionFulfilled.payload).toEqual(mockComments);
  });

  it('should fetch comments with "fetchComments.rejected"', async () => {
    const offerID = '1';
    mockAxiosAdapter.onGet(`${Endpoint.Comments}/${offerID}`).reply(400);

    await store.dispatch(commentsThunks.fetchComments(offerID));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      commentsThunks.fetchComments.pending.type,
      commentsThunks.fetchComments.rejected.type,
    ]);
  });

  it('should post comment with "postComment.fulfilled"', async () => {
    const offerID = '1';
    const commentMock: Review = mockReview;
    const body = { comment: 'Great!', rating: 5 };

    mockAxiosAdapter
      .onPost(`${Endpoint.Comments}/${offerID}`)
      .reply(200, commentMock);

    await store.dispatch(commentsThunks.postComment({ body, offerID }));

    const emittedActions = store.getActions();
    const extractedActionsTypes = extractActionsTypes(emittedActions);
    const postCommentActionFulfilled = emittedActions.at(1) as ReturnType<
      typeof commentsThunks.postComment.fulfilled
    >;
    expect(extractedActionsTypes).toEqual([
      commentsThunks.postComment.pending.type,
      commentsThunks.postComment.fulfilled.type,
    ]);
    expect(postCommentActionFulfilled.payload).toEqual(mockReview);
  });

  it('should post comment with "postComment.rejected"', async () => {
    const offerID = '1';
    const body = { comment: 'Great!', rating: 5 };

    mockAxiosAdapter.onPost(`${Endpoint.Comments}/${offerID}`).reply(400);

    await store.dispatch(commentsThunks.postComment({ body, offerID }));

    const actions = extractActionsTypes(store.getActions());
    expect(actions).toEqual([
      commentsThunks.postComment.pending.type,
      commentsThunks.postComment.rejected.type,
    ]);
  });
});
