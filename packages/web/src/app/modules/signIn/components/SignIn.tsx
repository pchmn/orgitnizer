import { GithubIcon } from '@app/shared/components';
import { SignInGenerics, useAuth, useEffectOnce } from '@lib/core';
import { FlexLayout, Icon, useNotification } from '@lib/ui';
import { Button, Text, Title } from '@mantine/core';
import { useNavigate, useSearch } from '@tanstack/react-location';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SignIn = () => {
  const { t } = useTranslation();
  const { signIn, handleSignin } = useAuth();
  const { redirectResult } = useSearch<SignInGenerics>();
  const navigate = useNavigate();
  const { showError } = useNotification();
  const [isLoading, setIsLoading] = useState(!!redirectResult);

  const handleRedirectResult = async () => {
    try {
      if (!redirectResult) {
        return;
      }
      await handleSignin(redirectResult);
      if (redirectResult === 'success') {
        navigate({ to: '/dashboard' });
      } else if (redirectResult === 'failure') {
        showError({ title: t('signIn.notificationError.title'), message: t('signIn.notificationError.message') });
      }
    } catch (err) {
      showError({ title: t('signIn.notificationError.title'), message: t('signIn.notificationError.message') });
    }
  };

  useEffectOnce(() => {
    handleRedirectResult();
  });

  const githubSignIn = () => {
    setIsLoading(true);
    signIn();
  };

  return (
    <FlexLayout alignItems="center" flexGrow={1} spacing={40} style={{ margin: '150px 0' }}>
      <Title style={{ margin: 0 }} align="center">
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
};

SignIn.whyDidYouRender = true;
