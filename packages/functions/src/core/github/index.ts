import { graphql } from '@octokit/graphql';
import { Account } from 'node-appwrite';

export async function initGithubGraphql(account: Account) {
  const githubToken = (await account.getSessions()).sessions[0]?.providerAccessToken;
  return graphql.defaults({
    headers: {
      authorization: `token ${githubToken}`
    }
  });
}
