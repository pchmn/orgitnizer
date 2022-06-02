import { initSdk, Request, Response } from '@core/appwrite';
import { initGithubGraphql } from '@core/github';
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
        login
      }
    }
  `);
  const accountUpdated = await account.updateName(login);
  return accountUpdated;
}
