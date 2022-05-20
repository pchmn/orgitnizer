import { showNotification } from '@mantine/notifications';

interface NotificationOptions {
  title: string;
  message?: string;
}

export function useNotification() {
  const showSuccess: (options: NotificationOptions) => void = ({ title, message }) => {
    showNotification({ title, message, color: 'green' });
  };

  const showError: (options: NotificationOptions) => void = ({ title, message }) => {
    showNotification({ title, message, color: 'error' });
  };

  return { showSuccess, showError };
}
