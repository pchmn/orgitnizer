import { Models } from 'appwrite';

export const currentUser: Models.User<Models.Preferences> = {
  $id: 'id',
  name: 'currentUser',
  registration: new Date().getTime(),
  status: true,
  passwordUpdate: new Date().getTime(),
  email: 'currentUser@orgitz.app',
  emailVerification: true,
  prefs: {}
};

export const mockAppwriteAccount = vi.fn().mockReturnValue(currentUser);
