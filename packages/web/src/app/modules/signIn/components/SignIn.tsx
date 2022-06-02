import { GithubIcon } from '@app/shared/components';
import { SignInGenerics, useAuth } from '@lib/core';
import { FlexLayout, Icon } from '@lib/ui';
import { Button, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function SignIn() {
  const { t } = useTranslation();
  const { signIn, handleSignin } = useAuth();
  const { redirectResult } = useSearch<SignInGenerics>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        if (!redirectResult) {
          return;
        }
        setIsLoading(true);
        await handleSignin(redirectResult);
        if (redirectResult === 'success') {
          navigate({ to: '/dashboard' });
        } else if (redirectResult === 'failure') {
          showNotification({
            title: t('signIn.notificationError.title'),
            message: t('signIn.notificationError.message'),
            color: 'error',
            autoClose: 5000
          });
        }
      } catch (err) {
        showNotification({
          title: t('signIn.notificationError.title'),
          message: t('signIn.notificationError.message'),
          color: 'error',
          autoClose: 5000
        });
      }
      setIsLoading(false);
    };

    handleRedirectResult();
  }, [redirectResult, handleSignin, navigate, t]);

  const githubSignIn = () => {
    setIsLoading(true);
    signIn();
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
        loading={isLoading}
      >
        {t('signIn.signInWithGitHub')}
      </Button>
    </FlexLayout>
  );
}
