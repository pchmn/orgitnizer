import { Models } from 'appwrite';

export interface UserPrefs extends Models.Preferences {
  avatarUrl: string;
}
