import { Appwrite } from 'appwrite';

let appwrite: Appwrite;

const initSdk = ({ endpoint, projectId }: { endpoint: string; projectId: string }) => {
  appwrite = new Appwrite();
  appwrite.setEndpoint(endpoint).setProject(projectId);
};

export { appwrite, initSdk };
