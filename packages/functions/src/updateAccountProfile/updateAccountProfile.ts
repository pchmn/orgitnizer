import { initSdk, Request, Response } from '@core/appwrite';
import { initGithubGraphql } from '@core/github';
import { Account } from 'node-appwrite';

export default async function updateAccountProfile(req: Request, res: Response) {
  const { account } = initSdk(req.env);

  const accountUpdated = await updateAccountNameAndAvatar(account);

  res.json(accountUpdated);
}

async function updateAccountNameAndAvatar(account: Account) {
  const graphql = await initGithubGraphql(account);

  const {
    viewer: { login, avatarUrl }
  } = await graphql<{ viewer: { login: string; avatarUrl: string } }>(`
    {
      viewer {
        login
        avatarUrl
      }
    }
  `);
  await account.updatePrefs({
    avatarUrl
  });
  const accountUpdated = await account.updateName(login);
  return accountUpdated;
}
