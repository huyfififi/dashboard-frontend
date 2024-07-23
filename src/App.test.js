import { render, screen } from '@testing-library/react';
import App from './App';

test('renders daily report link', () => {
  // Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`.
  // Import `act` from `react` instead of `react-dom/test-utils`.
  // See https://react.dev/warnings/react-dom-test-utils for more info.
  render(<App />);
  const linkElement = screen.getByText(/nippo.huyfififi.com/i);
  expect(linkElement).toBeInTheDocument();
});
