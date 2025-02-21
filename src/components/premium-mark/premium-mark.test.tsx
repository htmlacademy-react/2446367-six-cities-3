import { render, screen } from '@testing-library/react';
import { PremiumMark } from './premium-mark';

describe('Component: PremiumMark', () => {
  it('should render correctly', () => {
    render(<PremiumMark bemBlock="place-card" />);

    const premiumMark = screen.getByText('Premium');

    expect(premiumMark).toBeInTheDocument();
  });
});
