import { showNotification } from '@mantine/notifications';
import { useCallback } from 'react';

interface NotificationOptions {
  title: string;
  message?: string;
  autoClose?: 5000;
}

export function useNotification() {
  const showSuccess: (options: NotificationOptions) => void = useCallback(({ title, message, autoClose = 5000 }) => {
    showNotification({ title, message, color: 'green', autoClose });
  }, []);

  const showError: (options: NotificationOptions) => void = useCallback(({ title, message, autoClose = 5000 }) => {
    showNotification({ title, message, color: 'error', autoClose });
  }, []);

  return { showSuccess, showError };
}
