import { Request, Response } from '@core/appwrite';

export const responseMock: Response = {
  send: vi.fn(),
  json: vi.fn()
};

export const requestMock: Request = {
  env: {},
  headers: {},
  payload: {}
};

export const graphqlMock = vi.fn();
export const updateNameMock = vi.fn();
export const updatePrefsMock = vi.fn();

vi.mock('@core/appwrite/initSdk', () => {
  return {
    initSdk: vi.fn().mockReturnValue({
      account: {
        updateName: updateNameMock,
        updatePrefs: updatePrefsMock
      }
    })
  };
});

vi.mock('@core/github', () => {
  return {
    initGithubGraphql: () => vi.fn(graphqlMock)
  };
});

vi.mock('@core/appwrite/response.model.ts', () => {
  return {
    send: vi.fn(),
    json: vi.fn()
  };
});
