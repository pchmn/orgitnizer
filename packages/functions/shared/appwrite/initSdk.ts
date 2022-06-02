import { Account, Client } from 'node-appwrite';

export function initSdk() {
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT || '')
    .setProject(process.env.APPWRITE_PROJECT_ID || '')
    .setJWT(process.env.APPWRITE_FUNCTION_JWT || '');
  return { account: new Account(client) };
}
