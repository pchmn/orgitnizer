import { ColorPaletteIcon, SettingsIcon } from '@app/shared/components';
import { Icon, ThemeEditor, useModal } from '@lib/ui';
import { ActionIcon, Menu } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function HeaderMenu() {
  const { t } = useTranslation();
  const { Modal: ThemeEditorModal, toggle: toggleThemeEditorModal } = useModal(ThemeEditor, undefined, {
    title: t('header.themeEditor.title'),
    size: 'sm'
  });

  return (
    <>
      <Menu
        control={
          <ActionIcon>
            <SettingsIcon />
          </ActionIcon>
        }
        style={{ verticalAlign: 'middle' }}
      >
        <Menu.Label>{t('header.settings')}</Menu.Label>
        <Menu.Item
          icon={
            <Icon size="xs">
              <ColorPaletteIcon />
            </Icon>
          }
          onClick={toggleThemeEditorModal}
        >
          {t('header.themeEditor.title')}
        </Menu.Item>
      </Menu>
      <ThemeEditorModal />
    </>
  );
}
