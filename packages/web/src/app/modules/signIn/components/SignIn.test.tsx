import { screen } from '@testing-library/react';
import { renderWithProvider } from 'src/test.utils';
import { SignIn } from './SignIn';

describe('SignIn', () => {
  it('should render correctly', () => {
    renderWithProvider(<SignIn />);

    expect(screen.getByText('signIn.signInWithGitHub')).toBeDefined();
  });
});
