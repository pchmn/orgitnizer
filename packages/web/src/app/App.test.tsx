import App from '@app/App';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { renderWithProvider } from 'src/test.utils';

beforeAll(async () => {
  const firebase = initializeApp({
    projectId: 'test-project',
    apiKey: 'foo'
  });

  const auth = getAuth(firebase);
  connectAuthEmulator(auth, 'http://localhost:9099');
});

describe.only('App', () => {
  test('count is 0 at first', () => {
    const { container } = renderWithProvider(<App />);

    expect(container).toBeDefined();
  });
});
