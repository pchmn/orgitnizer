import { SignOutIcon } from '@app/shared/components';
import { useAuth } from '@lib/core';
import { Stack } from '@lib/ui';
import { ActionIcon, Avatar, Text, Tooltip, useMantineTheme } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export function User() {
  const { currentUser, signOut } = useAuth();
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        <Avatar src={currentUser?.prefs.avatarUrl} radius="xl" />
        <Stack spacing={1}>
          <Text weight="medium">{currentUser?.name}</Text>
          <Text size="xs" color={theme.colors.gray[6]}>
            {currentUser?.email}
          </Text>
        </Stack>
      </Stack>
      <Tooltip label={t('dashboard.drawer.signOut')}>
        <ActionIcon onClick={signOut}>
          <SignOutIcon />
        </ActionIcon>
      </Tooltip>
    </Stack>
  );
}
