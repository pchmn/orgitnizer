import { Client, Functions } from 'node-appwrite';

export function initSdk() {
  const client = new Client();
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT || '')
    .setProject(process.env.APPWRITE_PROJECT_ID || '')
    .setKey(process.env.APPWRITE_API_KEY || '');
  return new Functions(client);
}
