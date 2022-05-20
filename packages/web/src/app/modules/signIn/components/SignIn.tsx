import { GithubIcon } from '@app/shared/components';
import { useFirebaseAuth } from '@lib/core';
import { FlexLayout, Icon } from '@lib/ui';
import { Button, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate } from '@tanstack/react-location';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function SignIn() {
  const { t } = useTranslation();
  const { signIn, getGithuRedirectResult, currentUser } = useFirebaseAuth();
  const navigate = useNavigate();
  const isOauthRedirect = sessionStorage.getItem('isOauthRedirect') === 'true';

  useEffect(() => {
    if (currentUser) {
      navigate({ to: '/dashboard' });
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (isOauthRedirect) {
      getGithuRedirectResult()
        .then(() => {
          sessionStorage.removeItem('isOauthRedirect');
        })
        .catch((err) => {
          sessionStorage.removeItem('isOauthRedirect');
          showNotification({
            title: t('signIn.notificationError.title'),
            message: t(
              err.code === 'auth/user-cancelled'
                ? 'signIn.notificationError.messageRefused'
                : 'signIn.notificationError.message'
            ),
            color: 'error',
            autoClose: 5000
          });
        });
    }
  }, [getGithuRedirectResult, isOauthRedirect, t]);

  const githubSignIn = async () => {
    sessionStorage.setItem('isOauthRedirect', 'true');
    await signIn();
  };

  return (
    <FlexLayout alignItems="center" flexGrow={1} spacing={40} style={{ marginTop: '5%' }}>
      <Title style={{ marginBottom: 0 }} align="center">
        {t('signIn.title')}
      </Title>
      <Text align="center" style={{ maxWidth: 500 }}>
        {t('signIn.description')}
      </Text>
      <Button
        onClick={githubSignIn}
        size="md"
        leftIcon={
          <Icon>
            <GithubIcon />
          </Icon>
        }
        loading={isOauthRedirect}
      >
        {t('signIn.signInWithGitHub')}
      </Button>
    </FlexLayout>
  );
}
