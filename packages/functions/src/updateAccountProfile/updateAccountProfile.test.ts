import { graphqlMock, requestMock, responseMock, updateNameMock, updatePrefsMock } from 'src/__test__/setupTests';
import updateAccountProfile from './updateAccountProfile';

describe('updateAccountProfile', () => {
  test('should update account name', async () => {
    graphqlMock.mockResolvedValue({ viewer: { login: 'test', avatarUrl: 'avatarUrl' } });
    updateNameMock.mockResolvedValue({ name: 'test', preferences: { avatarUrl: 'avatarUrl' } });
    await updateAccountProfile(requestMock, responseMock);

    expect(updateNameMock).toHaveBeenCalledWith('test');
    expect(updatePrefsMock).toHaveBeenCalledWith({ avatarUrl: 'avatarUrl' });
    expect(responseMock.json).toHaveBeenCalledWith({ name: 'test', preferences: { avatarUrl: 'avatarUrl' } });
  });

  test('should throw an error', async () => {
    graphqlMock.mockRejectedValue(new Error('test'));

    expect(updateAccountProfile(requestMock, responseMock)).rejects.toThrow('test');
  });
});
