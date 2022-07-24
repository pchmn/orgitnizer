import { graphqlMock, requestMock, responseMock, updateNameMock } from '@test/setupTests';
import setGithubUsername from '.';

describe('setGithubUsername', () => {
  test('should update account name', async () => {
    graphqlMock.mockResolvedValue({ viewer: { login: 'test' } });
    updateNameMock.mockResolvedValue({ name: 'test' });
    await setGithubUsername(requestMock, responseMock);

    expect(updateNameMock).toHaveBeenCalledWith('test');
    expect(responseMock.json).toHaveBeenCalledWith({ name: 'test' });
  });

  test('should throw an error', async () => {
    graphqlMock.mockRejectedValue(new Error('test'));

    expect(setGithubUsername(requestMock, responseMock)).rejects.toThrow('test');
  });
});
