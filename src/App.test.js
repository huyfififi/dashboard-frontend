import { render, screen } from '@testing-library/react';
import App from './App';

// Error in dependencies
// TODO: Configure GitHub Actions to run tests
test('renders daily report link', () => {
  render(<App />);
  const linkElement = screen.getByText(/nippo.huyfififi.com/i);
  expect(linkElement).toBeInTheDocument();
});
