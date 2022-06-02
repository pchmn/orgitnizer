import { initSdk, Request, Response } from '@shared/appwrite';
import { initGithubGraphql } from '@shared/github';
import { Account } from 'node-appwrite';

export default async function index(req: Request, res: Response) {
  try {
    const { account } = initSdk();

    const accountUpdated = await updateAccountName(account);

    res.json(accountUpdated);
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function updateAccountName(account: Account) {
  const graphql = await initGithubGraphql(account);

  const {
    viewer: { login }
  } = await graphql<{ viewer: { login: string } }>(`
    {
      viewer {
        login: String
      }
    }
  `);
  const accountUpdated = await account.updateName(login);
  return accountUpdated;
}
