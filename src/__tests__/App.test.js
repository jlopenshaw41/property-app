import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const appName = screen.getByText("Property App");
  expect(appName).toBeInTheDocument();
});
