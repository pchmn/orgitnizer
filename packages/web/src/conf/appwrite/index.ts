import { initSdk } from '@lib/core';

const credentials = import.meta.env.PROD
  ? {
      endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
      projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID
    }
  : {
      endpoint: 'http://localhost/v1',
      projectId: '6286756095b7c7c3c4b5'
    };

initSdk(credentials);
