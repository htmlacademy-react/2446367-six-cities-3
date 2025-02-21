import { render, screen } from '@testing-library/react';
import { EmptyFavoritesSection } from './empty-favorites-section';

describe('Component: EmptyFavoritesSection', () => {
  it('should render correctly', () => {
    render(<EmptyFavoritesSection />);

    const expectedText = /Save properties to narrow down search or plan your future trips./i;
    const bExpextedText = /Nothing yet saved./i;

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(bExpextedText)).toBeInTheDocument();
  });
});
