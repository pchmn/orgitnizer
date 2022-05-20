import { DefaultGenerics, Route } from '@tanstack/react-location';
import { SignInPage } from './pages/SignInPage';

const signInRoutes: Route<DefaultGenerics> = {
  path: 'signin',
  element: <SignInPage />
};

export default signInRoutes;
