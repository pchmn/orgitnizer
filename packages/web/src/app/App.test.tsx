import App from '@app/App';
import { renderWithProvider } from 'src/test.utils';

describe.only('App', () => {
  test('count is 0 at first', () => {
    const { container } = renderWithProvider(<App />);

    expect(container).toBeDefined();
  });
});
