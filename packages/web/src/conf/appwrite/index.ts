import { initSdk } from '@lib/core';

const credentials = import.meta.env.PROD
  ? {
      endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
      projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID
    }
  : {
      endpoint: 'http://localhost/v1',
      projectId: '62a0dbda79170deb5814'
    };

initSdk(credentials);
