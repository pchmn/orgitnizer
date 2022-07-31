import { appwrite, callFunction } from '@lib/core';
import { showNotification } from '@mantine/notifications';
import { currentUser, mockAppwriteAccount } from '@test/mocks/appwriteMock';
import { mockNavigate, mockUseSearch } from '@test/mocks/reactLocationMock';
import { renderWithProviders } from '@test/test.utils';
import { fireEvent, screen } from '@testing-library/react';
import { SignIn } from './SignIn';

describe('SignIn', () => {
  test('render', async () => {
    await renderWithProviders(<SignIn />);

    expect(screen.getByText('signIn.signInWithGitHub')).toBeDefined();
  });

  test('create Oauth session when signing in', async () => {
    vi.spyOn(appwrite.account, 'createOAuth2Session');
    await renderWithProviders(<SignIn />);

    fireEvent.click(screen.getByText('signIn.signInWithGitHub'));

    expect(appwrite.account.createOAuth2Session).toHaveBeenCalled();
  });

  test('show error when signing in with Github', async () => {
    mockAppwriteAccount.mockReturnValue(null);
    mockUseSearch.mockReturnValue({ redirectResult: 'failure' });
    await renderWithProviders(<SignIn />);

    expect(showNotification).toHaveBeenCalledWith({
      title: 'signIn.notificationError.title',
      message: 'signIn.notificationError.message',
      color: 'error',
      autoClose: 5000
    });
  });

  test('redirect to dashboard if sign in successfull', async () => {
    mockAppwriteAccount.mockReturnValue(currentUser);
    mockUseSearch.mockReturnValue({ redirectResult: 'success' });
    await renderWithProviders(<SignIn />);

    expect(mockNavigate).toHaveBeenCalledWith({ to: '/dashboard' });
  });

  test('call set-github-username if no username', async () => {
    mockAppwriteAccount.mockReturnValue({ ...currentUser, name: undefined });
    mockUseSearch.mockReturnValue({ redirectResult: 'success' });
    await renderWithProviders(<SignIn />);

    expect(callFunction).toHaveBeenCalledWith('set-github-username');
  });
});
