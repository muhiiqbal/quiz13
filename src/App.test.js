import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn', () => {
  render(<App />);
  const title = screen.getByText(/we need test?/i);
  expect(title).toBeInTheDocument();
});
