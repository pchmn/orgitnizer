import { AppLayout } from '@app/core/layout';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import React from 'react';
import './App.css';

const location = new ReactLocation();

function App() {
  return (
    <Router basepath="/orgitnizer" location={location} key={location.current.pathname} routes={[]}>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </Router>
  );
}

export default App;
