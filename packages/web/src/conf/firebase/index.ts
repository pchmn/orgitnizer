import { initializeApp } from 'firebase/app';

const firebaseConfigProd = {
  apiKey: import.meta.env.ORGITNIZER_API_KEY_PROD,
  authDomain: 'voker-c4ea8.firebaseapp.com',
  databaseURL: 'https://voker-c4ea8-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'voker-c4ea8',
  storageBucket: 'voker-c4ea8.appspot.com',
  messagingSenderId: '309173481875',
  appId: '1:309173481875:web:e6fdf44a7c433265cbb866',
  measurementId: 'G-WDTTGCRGS9'
};
const firebaseConfigDev = {
  apiKey: import.meta.env.ORGITNIZER_API_KEY_DEV,
  authDomain: 'orgitnizer-dev.firebaseapp.com',
  projectId: 'orgitnizer-dev',
  storageBucket: 'orgitnizer-dev.appspot.com',
  messagingSenderId: '678106443265',
  appId: '1:678106443265:web:05a826ba8699d250efda00'
};
initializeApp(import.meta.env.PROD ? firebaseConfigProd : firebaseConfigDev);
