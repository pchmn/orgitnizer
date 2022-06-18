import '@testing-library/jest-dom/extend-expect';
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));
