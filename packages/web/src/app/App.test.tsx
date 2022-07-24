import App from '@app/App';
import { mockAppwriteAccount } from '@test/mocks/appwriteMock';
import { renderWithProviders } from '@test/test.utils';
import { waitFor } from '@testing-library/react';

describe('App', () => {
  test('should render', async () => {
    const { container } = await renderWithProviders(<App />);

    expect(container).toBeDefined();
  });

  test('isAuthenticated storage is true', async () => {
    await renderWithProviders(<App />);

    await waitFor(() => expect(localStorage.getItem('isAuthenticated')).toBe('true'));
  });

  test('isAuthenticated storage is false', async () => {
    mockAppwriteAccount.mockReturnValue(null);
    await renderWithProviders(<App />);

    await waitFor(() => expect(localStorage.getItem('isAuthenticated')).toBe('false'));
  });
});
