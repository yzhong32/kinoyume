import {render, screen} from '@testing-library/react';
import App from './App';
import {PageProvider} from './context/PageProvider';
test('renders learn react link', () => {
  render(
      <PageProvider>
        <App />
      </PageProvider>,
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
