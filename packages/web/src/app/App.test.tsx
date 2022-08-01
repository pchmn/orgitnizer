import App from '@app/App';
import { waitFor } from '@testing-library/react';
import { mockAppwriteAccount } from 'src/__test__/mocks/appwriteMock';
import { renderWithProviders } from 'src/__test__/test.utils';

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
