import { DefaultGenerics, Route } from '@tanstack/react-location';
import React from 'react';
import { SignInPage } from './pages/SignInPage';

const signInRoutes: Route<DefaultGenerics> = {
  path: 'signin',
  element: <SignInPage />
};

export default signInRoutes;
