import '@testing-library/jest-dom/extend-expect';
import { vi } from 'vitest';
import { mockAppwriteAccount } from './mocks/appwriteMock';
import { mockNavigate, mockUseSearch } from './mocks/reactLocationMock';

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

vi.mock('@lib/core/appwrite/initSdk', () => {
  return {
    appwrite: {
      account: {
        get: mockAppwriteAccount,
        createOAuth2Session: vi.fn(),
        deleteSessions: vi.fn()
      }
    }
  };
});

vi.mock('@lib/core/appwrite/utils/callFunction', () => {
  return {
    callFunction: vi.fn()
  };
});

vi.mock('@tanstack/react-location', async () => {
  const reactLocation = await vi.importActual('@tanstack/react-location');
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...reactLocation,
    useSearch: mockUseSearch,
    useNavigate: () => vi.fn(mockNavigate)
  };
});

vi.mock('@mantine/notifications', async () => {
  const mantineNotifications = await vi.importActual('@mantine/notifications');
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...mantineNotifications,
    showNotification: vi.fn()
  };
});

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      addListener: function () {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      removeListener: function () {}
    };
  };
