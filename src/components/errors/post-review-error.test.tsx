import { render, screen } from '@testing-library/react';
import { PostReviewError } from './post-review-error';

describe('Component: PostReviewError', () => {
  it('should render correctly', () => {
    render(<PostReviewError />);

    const expectedText = /Only authorized users can post comments./i;

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
