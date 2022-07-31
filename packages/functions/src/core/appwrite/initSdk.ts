import { Account, Client } from 'node-appwrite';

export function initSdk(envs: Record<string, string>) {
  const client = new Client();
  client
    .setEndpoint(envs.APPWRITE_ENDPOINT || '')
    .setProject(envs.APPWRITE_FUNCTION_PROJECT_ID || '')
    .setJWT(envs.APPWRITE_FUNCTION_JWT || '');
  return { account: new Account(client) };
}
